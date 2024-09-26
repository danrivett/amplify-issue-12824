import React from "react";
import { DataStore, Predicates } from "aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react-native";
import { ContractorJobInfo } from "@/src/models";
import dayjs from "dayjs";
import { ThemedText } from "@/components/ThemedText";
import { Button, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedView } from "@/components/ThemedView";

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    console.log("Sleeping for", ms);
    return setTimeout(resolve, ms);
  });
};

const App = () => {
  const testDataStore = async () => {
    try {
      let jobInfo = (
        await DataStore.query(ContractorJobInfo, (info) =>
          info.jobId.eq("dummy-id")
        )
      )[0];

      console.log("existing jobInfo", jobInfo);

      if (jobInfo == null) {
        console.log(`Creating ContractorJobInfo`);

        jobInfo = await DataStore.save(
          new ContractorJobInfo({
            contractorId: "currentContractor.id",
            cognitoUserId: "currentContractor.cognitoUserId",
            jobId: "dummy-id",
          })
        );
      } else {
        console.log(`Updating ContractorJobInfo initially`);

        jobInfo = await DataStore.save(
          ContractorJobInfo.copyOf(jobInfo, (updated) => {
            updated.contractorId = `changed-${dayjs().toISOString()}`;
          })
        );
      }

      // Some of the test scenarios sleep between DataStore operations, others don't
      // This is to see how adding a delay (for outbox syncing) affects things

      await sleep(5000);

      console.log(`Updating ContractorJobInfo`);

      await DataStore.save(
        ContractorJobInfo.copyOf(jobInfo, (updated) => {
          updated.contractorId = "overwritten";
        })
      );

      // query for the job info again
      jobInfo = (
        await DataStore.query(ContractorJobInfo, (info) =>
          info.jobId.eq("dummy-id")
        )
      )[0];

      console.log("updated jobInfo", jobInfo);
    } catch (error) {
      console.error("Error during DataStore operations:", error);
    }
  };

  // delete all job info
  const deleteAllJobInfo = async () => {
    try {
      await DataStore.delete(ContractorJobInfo, Predicates.ALL);
      console.log("Deleted all job info");
    } catch (error) {
      console.error("Error deleting all job info:", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">DataStore Issue #12824</ThemedText>
      </ThemedView>
      <Button onPress={testDataStore} title="Test DataStore" />
      <Button onPress={deleteAllJobInfo} title="Delete All Job Info" />
    </ParallaxScrollView>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

import React from "react";
import { DataStore, Predicates } from "aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react-native";
import { ContractorJobInfo } from "@/src/models";
import dayjs from "dayjs";
import { ThemedText } from "@/components/ThemedText";
import { Button, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";

import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports.js";

Amplify.configure(awsconfig);

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
        <View style={styles.container}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">DataStore Issue #12824</ThemedText>
            </ThemedView>
            <Button onPress={testDataStore} title="Test DataStore" />
            <Button onPress={deleteAllJobInfo} title="Delete All Job Info" />
        </View>
    );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
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

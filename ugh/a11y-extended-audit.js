/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
"use strict"

const Audit = require("lighthouse").Audit

const Total_Duplicate_IDs = 0

/**
 * @fileoverview Tests that `window.myLoadMetrics.searchableTime` was below the
 * test threshold value.
 */

class LoadAudit extends Audit {
    static get meta() {
        return {
            id: "a11y-extended-audit",
            title: "Page passed WCAG 2.1 AA and best practices",
            failureTitle: "Page failed WCAG 2.1 AA and best practices",
            description:
                "Used to measure WCAG 2.1 AA and best practice compliance of the page",

            // The name of the custom gatherer class that provides input to this audit.
            requiredArtifacts: ["DuplicateIds"],
        }
    }

    static audit(artifacts) {
        const loadMetrics = artifacts.DuplicateIds

        // Audit will pass when the search box loaded in less time than our threshold.
        // This score will be binary, so will get a red ✘ or green ✓ in the report.
        // const belowThreshold = loadMetrics.searchableTime <= MAX_SEARCHABLE_TIME

        // return {
        //     numericValue: loadMetrics.searchableTime,
        //     // Cast true/false to 1/0
        //     score: Number(belowThreshold),
        // }
        const nodes = document.querySelectorAll("[id]")
        const ids = {}
        const totalNodes = nodes.length

        for (let i = 0; i < totalNodes; i++) {
            const currentId = nodes[i].id ? nodes[i].id : "undefined"
            if (isNaN(ids[currentId])) {
                ids[currentId] = 0
            }
            ids[currentId]++
        }

        // console.log(ids)
        const belowThreshold = loadMetrics.ids >= Total_Duplicate_IDs
        return {
            numericValue: loadMetrics.ids,
            // Cast true/false to 1/0
            score: Number(belowThreshold),
        }
    }
}

module.exports = LoadAudit

export interface JestReport {
    numFailedTestSuites:       number;
    numFailedTests:            number;
    numPassedTestSuites:       number;
    numPassedTests:            number;
    numPendingTestSuites:      number;
    numPendingTests:           number;
    numRuntimeErrorTestSuites: number;
    numTodoTests:              number;
    numTotalTestSuites:        number;
    numTotalTests:             number;
    openHandles:               any[];
    snapshot:                  Snapshot;
    startTime:                 number;
    success:                   boolean;
    testResults:               TestResult[];
    wasInterrupted:            boolean;
}

export interface Snapshot {
    added:               number;
    didUpdate:           boolean;
    failure:             boolean;
    filesAdded:          number;
    filesRemoved:        number;
    filesRemovedList:    any[];
    filesUnmatched:      number;
    filesUpdated:        number;
    matched:             number;
    total:               number;
    unchecked:           number;
    uncheckedKeysByFile: any[];
    unmatched:           number;
    updated:             number;
}

export interface TestResult {
    leaks:           boolean;
    numFailingTests: number;
    numPassingTests: number;
    numPendingTests: number;
    numTodoTests:    number;
    openHandles:     any[];
    perfStats:       PerfStats;
    skipped:         boolean;
    snapshot:        TestResultSnapshot;
    testFilePath:    string;
    testResults:     TestResultTestResult[];
    failureMessage:  null;
}

export interface PerfStats {
    end:     number;
    runtime: number;
    slow:    boolean;
    start:   number;
}

export interface TestResultSnapshot {
    added:         number;
    fileDeleted:   boolean;
    matched:       number;
    unchecked:     number;
    unmatched:     number;
    updated:       number;
    uncheckedKeys: any[];
}

export interface TestResultTestResult {
    ancestorTitles:    string[];
    duration:          number;
    failureDetails:    any[];
    failureMessages:   any[];
    fullName:          string;
    location:          null;
    numPassingAsserts: number;
    status:            string;
    title:             string;
}

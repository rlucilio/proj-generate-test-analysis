export interface TestComponentReportStep {
    description: string;
    type: string;
}

export interface TestComponentReportScenario {
    title: string;
    steps: TestComponentReportStep[];
}

export interface TestComponentReport {
    fileName: string;
    feature: string;
    success: boolean;
    countScenarios: number;
    scenarios: TestComponentReportScenario[];
}

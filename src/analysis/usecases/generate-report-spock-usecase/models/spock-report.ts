export interface Info {
    executedFeatures: string[];
    ignoredFeatures:  any[];
    stats:            Stats;
    title:            string;
    narrative:        string;
}

export interface Stats {
    failures:      number;
    errors:        number;
    skipped:       number;
    totalRuns:     number;
    totalFeatures: number;
    successRate:   number;
    time:          number;
}

export interface SpockReport {
    [key: string]: Info
}
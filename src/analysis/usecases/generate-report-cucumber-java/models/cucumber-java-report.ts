export interface CucumberJavaReport {
    line:        number;
    elements:    Element[];
    name:        string;
    description: string;
    id:          string;
    keyword:     string;
    uri:         string;
    tags:        TopLevelTag[];
}

export interface Element {
    start_timestamp: string;
    before:          After[];
    line:            number;
    name:            string;
    description:     string;
    id:              string;
    after:           After[];
    type:            string;
    keyword:         string;
    steps:           Step[];
    tags:            ElementTag[];
}

export interface After {
    result: Result;
    match:  AfterMatch;
}

export interface AfterMatch {
    location: string;
}

export interface Result {
    duration: number;
    status:   string;
}

export interface Step {
    result:  Result;
    line:    number;
    name:    string;
    match:   StepMatch;
    keyword: string;
}

export interface StepMatch {
    arguments?: Argument[];
    location:   string;
}

export interface Argument {
    val:    string;
    offset: number;
}

export interface ElementTag {
    name: string;
}


export interface TopLevelTag {
    name:     string;
    type:     string;
    location: LocationClass;
}

export interface LocationClass {
    line:   number;
    column: number;
}
export interface CypressReport {
    keyword:  string;
    name:     string;
    line:     number;
    id:       string;
    tags:     Tag[];
    uri:      string;
    elements: Element[];
}

export interface Element {
    id:      string;
    keyword: string;
    line:    number;
    name:    string;
    tags:    Tag[];
    type:    string;
    steps:   Step[];
}

export interface Step {
    arguments: any[];
    keyword:   string;
    line:      number;
    name:      string;
    result:    Result;
}

export interface Result {
    status:   string;
    duration: number;
}

export interface Tag {
    name: string;
    line: number;
}

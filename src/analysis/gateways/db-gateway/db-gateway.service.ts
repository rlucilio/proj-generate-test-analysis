import { FirebaseProvider } from '../../../shared/providers/firebase.provider';
import { Injectable, Scope } from '@nestjs/common';
import { TestUnitReport } from 'src/analysis/usecases/generate-report-usecase/models/test-unit-report';
import { TestComponentReport } from 'src/analysis/usecases/generate-report-usecase/models/test-component-report';

@Injectable()
export class DbGatewayService {

    constructor(
        private firebaseProvider: FirebaseProvider
    ) {}
    
    saveTestsUnitsAll(squad: string, env: string, service: string, details: string, testsUnits: TestUnitReport[]) {
        this.firebaseProvider.setTests(squad, service, env, 'unit', {
            tests: testsUnits,
            service,
            squad,
            env: env === 'backend' ? 'Backend' : 'Frontend',
            typeTest: 'Unitário',
            detailsId: details
        })
    }
    
    saveTestsComponentAll(squad: string, env: string, service: string, details: string, testsComponents: TestComponentReport[]) {
        this.firebaseProvider.setTests(squad, service, env, 'component', {
            tests: testsComponents,
            service,
            squad,
            env: env === 'backend' ? 'Backend' : 'Frontend',
            typeTest: 'Componente',
            detailsId: details
        })
    }
}

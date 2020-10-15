import { FirebaseConfig } from './firebase.config';
import { Injectable } from '@nestjs/common';
import firebaseAdmin from "firebase-admin";
import firebaseCred from "../../../firebase.json";

type TypeTests = 'unit' | 'component'

@Injectable()
export class FirebaseProvider {
    private db: firebaseAdmin.database.Database;
    constructor() {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert({
                clientEmail: FirebaseConfig.client_email,
                privateKey: FirebaseConfig.private_key,
                projectId: FirebaseConfig.project_id
            }),
            databaseURL: "https://test-analysis-47d77.firebaseio.com"
        });
    
        this.db = firebaseAdmin.database()
    }

    setTests(squad: string, service: string, env: string, type: TypeTests, value: unknown){
        const refTable = this.db.ref(`tests/${squad}/${env}/${service}/${type}`)

        try {
            refTable.update({
                [new Date().toLocaleString()]: value
            });
            console.log('Save success');
        } catch (error) {
            console.error('Error in save tests', error);
        }
    }

}

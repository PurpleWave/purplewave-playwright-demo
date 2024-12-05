// utils/DirectusClient.ts
import {authentication, createDirectus, readItems, rest} from '@directus/sdk';
import * as dotenv from 'dotenv';

dotenv.config();

export class DirectusClient {
    private client: any;

    constructor(baseUrl: string) {
        this.client = createDirectus(baseUrl).with(authentication()).with(rest());
        this.client.setToken(process.env.DIRECTUS_TOKEN);
    }

    async fetchAllItems(collection: string): Promise<any[]> {
        let allItems: any[] = [];
        for (let p = 1; ; p++) {
            const response = await this.client.request(readItems(collection, {limit, page: p}));
            if (response.length === 0) break;
            allItems = allItems.concat(response);
        }
        return allItems;
    }
}
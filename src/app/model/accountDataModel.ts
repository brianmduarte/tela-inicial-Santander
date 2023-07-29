export interface AccountDataModel {
    name: string;
    account: {
        agency: string;
        number: string;
    }
    card: {
        number: string;
    }
};
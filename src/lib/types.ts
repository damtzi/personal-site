export type CollectionsRecord = {
    id: number;
    instance_id: number;
    date_added: string;
    rating: 0;
    basic_information: BasicInformation;
};

export type BasicInformation = {
    [x: string]: any;
    cover_image: string;
    id: number;
    thumb: string;
    year: number;
    title: string;
    genres: string[];
    styles: string[];
    artists: Artist[];
    master_url: string;
    resource_url: string;
    formats: Formats[];
    labels: Label[];
};

export type Label = {
    id: string;
    name: string;
};

export type Formats = {
    descriptions: string[];
    name: string;
    qty: string;
    text: string;
};

export type Artist = {
    anv: string;
    id: string;
    name: string;
    resource_url: string;
    role: string;
    tracks: string;
};

export type Pagination = {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: any;
};

export type Image = {
    type: 'primary' | 'secondary';
    resource_url: string;
};

export type CollectionsResponse = {
    pagination: Pagination;
    releases: CollectionsRecord[];
};

export type ReleaseResponse = {
    id: number;
    title: string;
    notes: string;
    released: string;
    year: number;
    resource_url: string;
    uri: string;
    artists: Artist[];
    labels: Label[];
    formats: Formats[];
    genres: string[];
    styles: string[];
    images: Image[];
    thumb: string;
}

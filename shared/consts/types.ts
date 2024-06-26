export type CurrencySymbolsResponseDisplay = {
	CHANGE24HOUR: string;
	CHANGEDAY: string;
	CHANGEHOUR: string;
	CHANGEPCT24HOUR: string;
	CHANGEPCTDAY: string;
	CHANGEPCTHOUR: string;
	CIRCULATINGSUPPLY: string;
	CIRCULATINGSUPPLYMKTCAP: string;
	CONVERSIONLASTUPDATE: string;
	CONVERSIONSYMBOL: string;
	CONVERSIONTYPE: string;
	FROMSYMBOL: string;
	HIGH24HOUR: string;
	HIGHDAY: string;
	HIGHHOUR: string;
	IMAGEURL: string;
	LASTMARKET: string;
	LASTTRADEID: string;
	LASTUPDATE: string;
	LASTVOLUME: string;
	LASTVOLUMETO: string;
	LOW24HOUR: string;
	LOWDAY: string;
	LOWHOUR: string;
	MARKET: string;
	MKTCAP: string;
	MKTCAPPENALTY: string;
	OPEN24HOUR: string;
	OPENDAY: string;
	OPENHOUR: string;
	PRICE: string;
	SUPPLY: string;
	TOPTIERVOLUME24HOUR: string;
	TOPTIERVOLUME24HOURTO: string;
	TOSYMBOL: string;
	TOTALTOPTIERVOLUME24H: string;
	TOTALTOPTIERVOLUME24HTO: string;
	TOTALVOLUME24H: string;
	TOTALVOLUME24HTO: string;
	VOLUME24HOUR: string;
	VOLUME24HOURTO: string;
	VOLUMEDAY: string;
	VOLUMEDAYTO: string;
	VOLUMEHOUR: string;
	VOLUMEHOURTO: string;
};

export type CurrencySymbolsResponseRaw = {
	CHANGE24HOUR: number;
	CHANGEDAY: number;
	CHANGEHOUR: number;
	CHANGEPCT24HOUR: number;
	CHANGEPCTDAY: number;
	CHANGEPCTHOUR: number;
	CIRCULATINGSUPPLY: number;
	CIRCULATINGSUPPLYMKTCAP: number;
	CONVERSIONLASTUPDATE: number;
	CONVERSIONSYMBOL: string;
	CONVERSIONTYPE: string;
	FLAGS: string;
	FROMSYMBOL: string;
	HIGH24HOUR: number;
	HIGHDAY: number;
	HIGHHOUR: number;
	IMAGEURL: string;
	LASTMARKET: string;
	LASTTRADEID: string;
	LASTUPDATE: number;
	LASTVOLUME: number;
	LASTVOLUMETO: number;
	LOW24HOUR: number;
	LOWDAY: number;
	LOWHOUR: number;
	MARKET: string;
	MEDIAN: number;
	MKTCAP: number;
	MKTCAPPENALTY: number;
	OPEN24HOUR: number;
	OPENDAY: number;
	OPENHOUR: number;
	PRICE: number;
	SUPPLY: number;
	TOPTIERVOLUME24HOUR: number;
	TOPTIERVOLUME24HOURTO: number;
	TOSYMBOL: string;
	TOTALTOPTIERVOLUME24H: number;
	TOTALTOPTIERVOLUME24HTO: number;
	TOTALVOLUME24H: number;
	TOTALVOLUME24HTO: number;
	TYPE: string;
	VOLUME24HOUR: number;
	VOLUME24HOURTO: number;
	VOLUMEDAY: number;
	VOLUMEDAYTO: number;
	VOLUMEHOUR: number;
	VOLUMEHOURTO: number;
};

export type CurrencySymbolResponse = {
	display: CurrencySymbolsResponseDisplay;
	raw: CurrencySymbolsResponseRaw;
};

export type CurrencySymbolType = Record<string, CurrencySymbolResponse>;

export type AvailableCurrencyType = {
	id: number;
	symbol: string;
	partner_symbol: string;
	data_available_from: number;
};

export type AvailableCurrencyListResponseType = {
	Response: string;
	Message: string;
	HasWarning: boolean;
	Type: number;
	RateLimit: Object;
	Data: AvailableCurrencyType[];
};

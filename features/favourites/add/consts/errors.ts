export enum ErrorType {
	ALREADY_EXISTS = 0,
	EMPTY_FIELD = 1,
	UNKNOWN_CURRENCY = 2,
}

export class ValidationError extends Error {
	type: ErrorType | null = null;

	constructor(message: string, type: ErrorType) {
		super(message);
		this.type = type;
	}
}

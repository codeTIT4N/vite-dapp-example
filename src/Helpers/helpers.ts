import { ethers } from "ethers";

export interface OnClickFunction {
    (e: React.MouseEvent<HTMLElement>): void;
}

export interface NavBarProps {
    connect: OnClickFunction
}

export class MetamaskError extends Error {
    code: number;
    constructor(msg: string, _code: number) {
        super(msg);
        this.code = _code;
    }
}

export const hexToDecimal = (hex: string) => parseInt(hex, 16);

export type DappContextType = { connectedAddress: string | undefined, currentChainId: number | undefined };
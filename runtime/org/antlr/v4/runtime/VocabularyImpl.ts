/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

/*
 eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/naming-convention, no-redeclare,
 max-classes-per-file, jsdoc/check-tag-names, @typescript-eslint/no-empty-function,
 @typescript-eslint/restrict-plus-operands, @typescript-eslint/unified-signatures, @typescript-eslint/member-ordering,
 no-underscore-dangle, max-len
*/

/* cspell: disable */



import { java } from "../../../../../lib/java/java";
import { Token } from "./Token";
import { Vocabulary } from "./Vocabulary";




/**
 * This class provides a default implementation of the {@link Vocabulary}
 * interface.
 *
 * @author Sam Harwell
 */
export  class VocabularyImpl implements Vocabulary {
	private static readonly  EMPTY_NAMES?:  string[] = new   Array<string>(0);

	/**
	 * Gets an empty {@link Vocabulary} instance.
	 *
	 * <p>
	 * No literal or symbol names are assigned to token types, so
	 * {@link #getDisplayName(int)} returns the numeric value for all tokens
	 * except {@link Token#EOF}.</p>
	 */
	public static readonly  EMPTY_VOCABULARY?:  VocabularyImpl = new  VocabularyImpl(VocabularyImpl.EMPTY_NAMES, VocabularyImpl.EMPTY_NAMES, VocabularyImpl.EMPTY_NAMES);


	private readonly  literalNames?:  string[];

	private readonly  symbolicNames?:  string[];

	private readonly  displayNames?:  string[];

	private readonly  maxTokenType:  number;

	/**
	 * Constructs a new instance of {@link VocabularyImpl} from the specified
	 * literal and symbolic token names.
	 *
	 * @param literalNames The literal names assigned to tokens, or {@code null}
	 * if no literal names are assigned.
	 * @param symbolicNames The symbolic names assigned to tokens, or
	 * {@code null} if no symbolic names are assigned.
	 *
	 * @see #getLiteralName(int)
	 * @see #getSymbolicName(int)
	 */
	/* eslint-disable constructor-super, @typescript-eslint/no-unsafe-call */
public constructor(literalNames: string[], symbolicNames: string[]);

	/**
	 * Constructs a new instance of {@link VocabularyImpl} from the specified
	 * literal, symbolic, and display token names.
	 *
	 * @param literalNames The literal names assigned to tokens, or {@code null}
	 * if no literal names are assigned.
	 * @param symbolicNames The symbolic names assigned to tokens, or
	 * {@code null} if no symbolic names are assigned.
	 * @param displayNames The display names assigned to tokens, or {@code null}
	 * to use the values in {@code literalNames} and {@code symbolicNames} as
	 * the source of display names, as described in
	 * {@link #getDisplayName(int)}.
	 *
	 * @see #getLiteralName(int)
	 * @see #getSymbolicName(int)
	 * @see #getDisplayName(int)
	 */
	public constructor(literalNames: string[], symbolicNames: string[], displayNames: string[]);
/* @ts-expect-error, because of the super() call in the closure. */
public constructor(literalNames: string[], symbolicNames: string[], displayNames?: string[]) {
const $this = (literalNames: string[], symbolicNames: string[], displayNames?: string[]): void => {
if (displayNames === undefined) {
		$this(literalNames, symbolicNames, undefined);
	}
 else  {

/* @ts-expect-error, because of the super() call in the closure. */
		super();
this.literalNames = literalNames !== undefined ? literalNames : VocabularyImpl.EMPTY_NAMES;
		this.symbolicNames = symbolicNames !== undefined ? symbolicNames : VocabularyImpl.EMPTY_NAMES;
		this.displayNames = displayNames !== undefined ? displayNames : VocabularyImpl.EMPTY_NAMES;
		// See note here on -1 part: https://github.com/antlr/antlr4/pull/1146
		this.maxTokenType =
			Math.max(this.displayNames.length,
					 Math.max(this.literalNames.length, this.symbolicNames.length)) - 1;
	}
};

$this(literalNames, symbolicNames, displayNames);

}
/* eslint-enable constructor-super, @typescript-eslint/no-unsafe-call */

	/**
	 * Returns a {@link VocabularyImpl} instance from the specified set of token
	 * names. This method acts as a compatibility layer for the single
	 * {@code tokenNames} array generated by previous releases of ANTLR.
	 *
	 * <p>The resulting vocabulary instance returns {@code null} for
	 * {@link #getLiteralName(int)} and {@link #getSymbolicName(int)}, and the
	 * value from {@code tokenNames} for the display names.</p>
	 *
	 * @param tokenNames The token names, or {@code null} if no token names are
	 * available.
	 * @return A {@link Vocabulary} instance which uses {@code tokenNames} for
	 * the display names of tokens.
	 */
	public static fromTokenNames = (tokenNames: string[]): Vocabulary => {
		if (tokenNames === undefined || tokenNames.length === 0) {
			return VocabularyImpl.EMPTY_VOCABULARY;
		}

		let  literalNames: string[] = java.util.Arrays.copyOf(tokenNames, tokenNames.length);
		let  symbolicNames: string[] = java.util.Arrays.copyOf(tokenNames, tokenNames.length);
		for (let  i: number = 0; i < tokenNames.length; i++) {
			let  tokenName: string = tokenNames[i];
			if (tokenName === undefined) {
				continue;
			}

			if (!(tokenName.length === 0)) {
				let  firstChar: number = tokenName.charAt(0);
				if (firstChar === '\'') {
					symbolicNames[i] = undefined;
					continue;
				}
				else { if (java.lang.Character.isUpperCase(firstChar)) {
					literalNames[i] = undefined;
					continue;
				}
}

			}

			// wasn't a literal or symbolic name
			literalNames[i] = undefined;
			symbolicNames[i] = undefined;
		}

		return new  VocabularyImpl(literalNames, symbolicNames, tokenNames);
	}

	public getMaxTokenType = (): number => {
		return this.maxTokenType;
	}

	public getLiteralName = (tokenType: number): string => {
		if (tokenType >= 0 && tokenType < this.literalNames.length) {
			return this.literalNames[tokenType];
		}

		return undefined;
	}

	public getSymbolicName = (tokenType: number): string => {
		if (tokenType >= 0 && tokenType < this.symbolicNames.length) {
			return this.symbolicNames[tokenType];
		}

		if (tokenType === Token.EOF) {
			return "EOF";
		}

		return undefined;
	}

	public getDisplayName = (tokenType: number): string => {
		if (tokenType >= 0 && tokenType < this.displayNames.length) {
			let  displayName: string = this.displayNames[tokenType];
			if (displayName !== undefined) {
				return displayName;
			}
		}

		let  literalName: string = this.getLiteralName(tokenType);
		if (literalName !== undefined) {
			return literalName;
		}

		let  symbolicName: string = this.getSymbolicName(tokenType);
		if (symbolicName !== undefined) {
			return symbolicName;
		}

		return java.lang.Integer.toString(tokenType);
	}

	// Because this is an actual implementation object, we can provide access methods for vocabulary symbols

	public getLiteralNames = (): string[] => {
		return this.literalNames;
	}

	public getSymbolicNames = (): string[] => {
		return this.symbolicNames;
	}

	public getDisplayNames = (): string[] => {
		return this.displayNames;
	}
}

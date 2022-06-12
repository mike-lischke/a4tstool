/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */


/*
 eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/naming-convention,
 max-classes-per-file, jsdoc/check-tag-names, @typescript-eslint/no-empty-function,
 @typescript-eslint/restrict-plus-operands, @typescript-eslint/unified-signatures, @typescript-eslint/member-ordering,
 no-underscore-dangle
*/

/* cspell: disable */

import { ATNState } from "./ATNState";
import { Transition } from "./Transition";




export  class WildcardTransition extends Transition {
	public constructor(target: ATNState) { super(target); }

	public getSerializationType = (): number => {
		return Transition.WILDCARD;
	}

	public matches = (symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean => {
		return symbol >= minVocabSymbol && symbol <= maxVocabSymbol;
	}

	public toString = (): string => {
		return ".";
	}
}
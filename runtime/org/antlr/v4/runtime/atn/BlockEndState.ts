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

import { ATNState } from "./ATNState";
import { BlockStartState } from "./BlockStartState";




/** Terminal node of a simple {@code (a|b|c)} block. */
export  class BlockEndState extends ATNState {
	public startState?:  BlockStartState;

	public getStateType = (): number => {
		return ATNState.BLOCK_END;
	}
}

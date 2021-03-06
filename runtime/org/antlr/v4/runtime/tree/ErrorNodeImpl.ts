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



import { ErrorNode } from "./ErrorNode";
import { ParseTreeVisitor } from "./ParseTreeVisitor";
import { TerminalNode } from "./TerminalNode";
import { TerminalNodeImpl } from "./TerminalNodeImpl";
import { Token } from "../Token";




/** Represents a token that was consumed during resynchronization
 *  rather than during a valid match operation. For example,
 *  we will create this kind of a node during single token insertion
 *  and deletion as well as during "consume until error recovery set"
 *  upon no viable alternative exceptions.
 */
export  class ErrorNodeImpl extends TerminalNodeImpl implements ErrorNode {
	public constructor(token: Token) {
		super(token);
	}

	public accept =  <T>(visitor: ParseTreeVisitor< T>): T => {
		return visitor.visitErrorNode(this);
	}
}

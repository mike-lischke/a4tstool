/* java2ts: keep */

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

import { IntegerList } from "./IntegerList";

/**
 *
 * @author Sam Harwell
 */
export class IntegerStack extends IntegerList {

    public constructor();
    public constructor(capacity: number);
    public constructor(list: IntegerStack);
    public constructor(capacityOrList?: number | IntegerStack) {
        if (capacityOrList === undefined) {
            // @ts-ignore
            super();
        } else if (typeof capacityOrList === "number") {
            super(capacityOrList);
        } else {
            super(capacityOrList);
        }
    }

    public readonly push = (value: number): void => {
        this.add(value);
    };

    public readonly pop = (): number => {
        return this.removeAt(this.size() - 1);
    };

    public readonly peek = (): number => {
        return this.get(this.size() - 1);
    };

}

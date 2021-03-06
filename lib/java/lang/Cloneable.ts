/*
 * This file is released under the MIT license.
 * Copyright (c) 2022, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import _ from "lodash";

export class Cloneable<T> {
    public clone(): T {
        return _.cloneDeep(this);
    }
}

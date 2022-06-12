/*
 * This file is released under the MIT license.
 * Copyright (c) 2021, 2022, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { RuntimeException } from "./RuntimeException";

export class IndexOutOfBoundsException extends RuntimeException {
    public constructor(message?: string) {
        super(message ?? "The given index is not within the bounds");
    }
}

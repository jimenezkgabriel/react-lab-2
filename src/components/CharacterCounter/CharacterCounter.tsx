import React from "react";

import type { CharacterCounterProps } from "../../types";
import { Typography } from "@mui/material";

const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 25,
    maxWords = 100,
    targetReadingTime = 0 // in minutes
}) => {
    return (
        <>
            <Typography variant="subtitle1" color="white">
                Min: {minWords} | Max: {maxWords} {targetReadingTime > 0 ? `| Target Reading Time: ${(targetReadingTime).toLocaleString('en-US', { minimumIntegerDigits: 2 })}` : ''}
            </Typography>
        </>
    );
};

export default CharacterCounter;
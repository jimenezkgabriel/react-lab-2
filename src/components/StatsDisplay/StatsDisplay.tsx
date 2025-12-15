import React from "react";
import type { CharacterCounterProps, StatsDisplayProps } from "../../types";
import CharacterCounter from "../CharacterCounter/CharacterCounter";

import { Typography, Grid } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true
}) => {
    const minWordColor = green[500];
    const maxWordColor = red[500];

    const characterCounterProps: CharacterCounterProps = {
        minWords: 25,
        maxWords: 100,
        targetReadingTime: 0
    };

    return (
        <Grid container mt={4} p={2} borderRadius={2} bgcolor="rgba(255, 255, 255, 0.1)">
            <Grid size={{ xs: 12, sm: showReadingTime ? 4 : 6 }} direction={"column"} textAlign={"center"}>
                <Typography variant="h6" color="white">
                    Characters
                </Typography>
                <Typography variant="h6" color="white">
                    {stats.characterCount}
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: showReadingTime ? 4 : 6 }} textAlign="center">
                <Typography variant="h6" color="white">
                    Words
                </Typography>
                <Typography variant="h6" color={stats.wordCount < (characterCounterProps.minWords ?? 0) ? "white" : stats.wordCount > (characterCounterProps.maxWords ?? 0) ? maxWordColor : minWordColor}>
                    {stats.wordCount}
                </Typography>
            </Grid>
            {
                showReadingTime && (
                    <Grid size={{ xs: 12, sm: 4 }} textAlign="center">
                        <Typography variant="h6" color="white">
                            Reading Time
                        </Typography>
                        <Typography variant="h6" color="white">
                            {Math.floor(stats.readingTime)}:{Math.round((stats.readingTime - Math.floor(stats.readingTime)) * 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                        </Typography>
                    </Grid>
                )
            }
            <Grid size={12} textAlign="center" mt={2}>
                <CharacterCounter {...characterCounterProps} />
            </Grid>
        </Grid >
    );
};

export default StatsDisplay;
import React from "react";
import type { StatsDisplayProps } from "../../types";

import { Typography, Stack, Box, Grid } from "@mui/material";
import { red } from "@mui/material/colors";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true
}) => {
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
                <Typography variant="h6" color="white">
                    {stats.wordCount}
                </Typography>
            </Grid>
            {showReadingTime && (
                <Grid size={{ xs: 12, sm: 4 }} textAlign="center">
                    <Typography variant="h6" color="white">
                        Reading Time
                    </Typography>
                    <Typography variant="h6" color="white">
                        {stats.readingTime.toFixed(2)}
                    </Typography>
                </Grid>
            )}
            <Grid size={12} textAlign="center" mt={2}>
                <Typography variant="h6" color="white">
                    Reading Time
                    {/* CharacterCounter Component goes somewhere here */}
                </Typography>
            </Grid>
        </Grid>
    );
};
export default StatsDisplay;
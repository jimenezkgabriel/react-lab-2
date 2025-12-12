import React from "react";
import type { StatsDisplayProps } from "../../types";

import { Typography, Stack, Box, Grid } from "@mui/material";
import { red } from "@mui/material/colors";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true
}) => {
    return (
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"space-around"} gap={2} mt={4} p={2} borderRadius={2} bgcolor="rgba(255, 255, 255, 0.1)">
            <Grid direction={"column"} justifyItems={"center"}>
                <Typography variant="h6" color="white">
                    Characters
                </Typography>
                <Typography variant="h6" color="white">
                    {stats.characterCount}
                </Typography>
            </Grid>
            <Grid direction={"column"} justifyItems={"center"}>
                <Typography variant="h6" color="white">
                    Words
                </Typography>
                <Typography variant="h6" color="white">
                    {stats.wordCount}
                </Typography>
                {/* Insert Character Counter Component On This Line */}
            </Grid>
            <Grid direction={"column"} justifyItems={"center"}>
                {showReadingTime && (
                    <>
                        <Typography variant="h6" color="white">
                            Reading Time
                        </Typography>
                        <Typography variant="h6" color="white">
                            {stats.readingTime.toFixed(2)}
                        </Typography>
                    </>
                )}
            </Grid>
            {/* <Grid container direction={{ xs: "column", sm: "row" }} justifyContent={"space-between"} gap={2}>
                <Grid container textAlign={"center"} direction={"column"}>
                    <Typography variant="h6" color="white">
                        Characters
                    </Typography>
                    <Typography variant="h6" color="white">
                        {stats.characterCount}
                    </Typography>
                </Grid>
                <Box>
                    <Typography variant="h6" color="white">
                        Words {stats.wordCount}
                    </Typography>
                </Box>
                {showReadingTime && (
                    <Typography variant="h6" color="white">
                        Estimated Reading Time: {stats.readingTime.toFixed(2)} minutes
                    </Typography>
                )}
            </Grid> */}
        </Stack>
    );
};
export default StatsDisplay;
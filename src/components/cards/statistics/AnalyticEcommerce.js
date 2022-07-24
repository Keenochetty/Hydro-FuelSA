import PropTypes from "prop-types";

// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// assets
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import MainCard from "../../MainCard";

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({
  color,
  title,
  count,
  percentage,
  isLoss,
  extra,
  word,
  date,
}) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && (
                    <RiseOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                  {isLoss && (
                    <FallOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    {percentage && (
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="textSecondary">
          You gained an extra{" "}
          <Typography
            component="span"
            variant="caption"
            sx={{ color: `${color || "primary"}.main` }}
          >
            {extra}
          </Typography>{" "}
          (km)on this tank of petrol {date}
        </Typography>
      </Box>
    )}
    {word == "basedistance" && (
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="textSecondary">
          Calculated in 2010, 1st long distance trip travelled a tank of petrol
        </Typography>
      </Box>
    )}
    {word == "totalgain" && (
      <Box sx={{ pt: 2.25 }} className="lg:pb-6">
        <Typography variant="caption" color="textSecondary">
          Total gain since installation on 3 July 2022
        </Typography>
      </Box>
    )}
    {word == "date" && (
      <Box sx={{ pt: 2.25 }} className="lg:pb-6">
        <Typography variant="caption" color="textSecondary">
          Contact us for appointment confirmation
        </Typography>
      </Box>
    )}
  </MainCard>
);

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

AnalyticEcommerce.defaultProps = {
  color: "primary",
};

export default AnalyticEcommerce;

import React from "react";
import {
  makeStyles,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 160,
    height: 40,
  },
}));

const Filter = ({ catogoryFilter, handleChangeFilter }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl color="secondary" className={classes.formControl}>
        <InputLabel color="secondary" id="demo-simple-select-label">
          Category
        </InputLabel>
        <Select
          color="secondary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catogoryFilter}
          onChange={handleChangeFilter}
          label="Age"
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"samsung"}>Samsung</MenuItem>
          <MenuItem value={"oppo"}>Oppo</MenuItem>
          <MenuItem value={"redmi"}>Redmi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;

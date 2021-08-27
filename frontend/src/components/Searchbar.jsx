import React from "react";
import {
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
export default function Searchbar() {
  return (
    <div>
      <InputGroup className="searchbar">
        <DropdownButton
          variant="outline-secondary"
          title="All"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label="Text input with dropdown button" />
        <Button className="search-btn">
          <img src="/assets/images/loupe.png" alt="" />
        </Button>{" "}
      </InputGroup>
    </div>
  );
}

import React from "react";

import { Text, Input } from "components";

const Demo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          as="h5"
          variant="h5"
        >
          {props?.label}
        </Text>
        <Input
          className="font-inter font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
          wrapClassName="w-[100%]"
          name="zipcode"
          placeholder="0000"
          shape="RoundedBorder8"
          size="sm"
          variant="OutlineGray200"
        ></Input>
      </div>
    </>
  );
};

Demo.defaultProps = { label: "We&#39;ve sent a pin to vishal@dhiwise.com" };

export default Demo;

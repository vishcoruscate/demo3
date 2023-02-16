import React from "react";

import { Text, Button } from "components";
import Demo from "components/Demo";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo_900 flex flex-col font-inter gap-[20px] items-center justify-center mx-[auto] px-[20px] py-[283px] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start md:px-[20px] sm:px-[20px] w-[auto]">
          <Text
            className="font-bold text-left text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Atoms Demo Day
          </Text>
        </div>
        <div className="bg-white_A700 flex flex-col items-start justify-start p-[48px] md:px-[20px] sm:px-[20px] rounded-radius12 sm:w-[100%] w-[429px]">
          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Check your email
            </Text>
            <Demo
              className="flex flex-col items-start justify-start w-[100%]"
              label="We&#39;ve sent a pin to vishal@dhiwise.com"
            />
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] text-[14px] text-center text-white_A700 w-[100%]"
              onClick={() => navigate("/allcompanies")}
            >
              Sign In
            </Button>
            <div
              className="common-pointer flex flex-col items-center justify-center px-[16px] py-[8px] w-[100%]"
              onClick={() => navigate("/login")}
            >
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                I need another pin
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;

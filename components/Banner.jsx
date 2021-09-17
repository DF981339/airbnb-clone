import Image from "next/image";

function Banner() {
  return (
    <div className="-mt-20 relative">
      <picture>
        <source
          srcset="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcset="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=1920 2x"
          media="(min-width: 950px)"
        />
        <source
          srcset="https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=1440 2x"
          media="(min-width: 744px)"
        />
        <source srcset="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720 2x" />
        <img
          style={{ "--hc-lg-height": 626, "--hc-lg-width": 1128 }}
          className="w-full object-cover search-bar-bp:banner-height"
          src="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720"
        />
      </picture>

      <div className="absolute top-0 pt-[96px] pb-[40px] mobile-bp:pt-[250px] search-bar-bp:content-padding search-bar-bp:pb-[45px] w-full h-full">
        {/* Container */}
        <div className="flex justify-center text-center w-full h-full">
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-[22px] max-w-[200px] mobile-bp:hidden">
              Not sure where to go? Perfect.
            </p>
            <p className="text-lg hidden mobile-bp:block">
              Not sure where to go? Perfect.
            </p>
            {/* Button Section */}
            <div className="flex justify-center mt-4">
              <button className="w-[160px] mobile-bp:w-[200px] mobile-bp:py-4 text-lg font-bold bg-white py-3 shadow-lg rounded-full hover:shadow-xl active:scale-90 transition duration-200">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6F019C] to-[#C6017E]">
                  I'm flexible
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

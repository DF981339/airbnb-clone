import Image from "next/image";
function LargeCard() {
  return (
    <section>
      <div className="relative cursor-pointer">
        <picture>
          <source
            srcset="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440 1x, https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560 2x"
            media="(min-width: 1440px)"
          />
          <source
            srcset="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440 2x"
            media="(min-width: 744px)"
          />
          <source
            srcset="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440 2x"
            media="(min-width: 744px)"
          />
          <source srcset="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=720 2x" />
          <img
            loading="lazy"
            style={{}}
            className="w-full object-cover rounded-2xl large-card-height"
            src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720"
          />
        </picture>

        <div className="large-card-mobile-abs-box text-white mobile-bp:large-card-mid-abs-box mobile-bp:px-10 mobile-bp:w-[360px] logo-bp:large-card-big-abs-box">
          <div className="">
            <h3 className="text-3xl logo-bp:text-5xl logo-bp:leading-[52px]">
              Try hosting
            </h3>

            <div className="pt-3 font-light whitespace-pre-line leading-5 logo-bp:text-[19px] logo-bp:leading-6">
              <span>
                Earn extra income and unlock new opportunities by sharing your
                space.
              </span>
            </div>

            <button className="w-[106px] h-9 bg-white text-black rounded-md mt-4 logo-bp:mt-10 mobile-bp:mt-5">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;

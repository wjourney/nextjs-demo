import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import carouselConfig from 'lib/constant/carouselConfig';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function ImageModal({
  selectedIndex,
  images,
  onClose: closeModal,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const carouselRef = useRef();

  useEffect(() => {
    if (selectedIndex && carouselRef) {
      console.log("drd", selectedIndex, carouselRef?.current)
      // eslint-disable-next-line
      carouselRef.current?.goToSlide(
        images.findIndex((i) => i.model_id === selectedIndex),
      );
    }
  }, [selectedIndex]);

  if (!selectedIndex) return null;

  async function handlePrevious() {
    await carouselRef.current.previous();
    setCurrentImageIndex( carouselRef.current.state.currentSlide)
  }

  async function handleNext() {
    await carouselRef.current.goToSlide(carouselRef.current.state.currentSlide + 1);
    setCurrentImageIndex( carouselRef.current.state.currentSlide)
  }

  return (
    <Modal
      // as="div"
      // className="h-2/3"
      onClose={closeModal}
      isOpen={true}
      isCentered={true}
      as={Fragment}
    >
      <div className="fixed inset-0  min-h-full overflow-y-auto z-[1001]">
        <div className="flex min-h-full h-2/3  overflow-scroll items-center justify-center bg-gray-900 p-4 text-center">
          <ModalContent className="z-[1003] flex flex-col relative h-2/3 w-full mx-auto my-auto max-w-5xl transform rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all 2xl:max-w-7xl">
            <Carousel
              ref={carouselRef}
              deviceType="desktop"
              itemClass="px-2"
              responsive={carouselConfig.responsive.model}
              renderButtonGroupOutside 
              customRightArrow={<></>}
              customLeftArrow={<></>}
            >
              {images?.map(
                ({
                  author,
                  base_model,
                  created_at,
                  demo_picture,
                  description,
                  likes,
                  model_id,
                  model_name,
                  tag,
                }) => {
                  return (
                    <Fragment key={model_id}>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="min-h-full">
                          <Image
                            priority
                            placeholder="blur"
                            blurDataURL={carouselConfig.rgbDataURL(
                              237,
                              181,
                              6,
                            )}
                            alt=""
                            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                            style={{ transform: 'translate3d(0, 0, 0)' }}
                            src={demo_picture}
                            width={414}
                            height={190}
                            // priority
                            // loading="lazy"
                            sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                          />
                        </div>
                        <div>
                          <div className="mb-2 inline-flex h-8">
                            <Button
                              // disableRipple
                              variant="text"
                              sx={{ color: '#BDBDBD' }}
                              className="mr-4 p-0"
                            >
                              <Avatar
                                sx={{
                                  bgcolor: '#7258F2',
                                  color: '#1A202C',
                                  borderRadius: 2,
                                  fontFamily: 'sans-serif',
                                  width: 28,
                                  height: 28,
                                  fontSize: 19,
                                }}
                                variant="rounded"
                                className="mr-1"
                              >
                                {author.charAt(0)}
                              </Avatar>
                              <span className="text-sm text-[#BDBDBD]">
                                {author}
                              </span>
                            </Button>
                            <Button
                              // disableRipple
                              // focusVisibleClassName=""
                              variant="outlined"
                              sx={{
                                borderColor: 'rgba(255, 255, 255, 0.16)',
                                borderRadius: 8,
                                color: '#BDBDBD',
                                fontSize: 12,
                              }}
                              className="flex w-28 items-center px-1 pt-1"
                            >
                              <span className="flex items-center">
                                <StarBorderIcon className="mr-0.5 h-4 w-4" />
                                Unfollow
                              </span>
                            </Button>
                          </div>

                          <div className="flex justify-between">
                            <h2 className="text-lg font-semibold text-gray-300">
                              {model_name}
                            </h2>
                            <button>
                              <MoreHorizOutlinedIcon />
                            </button>
                          </div>

                          <Divider
                            className="mt-3 mb-3"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.16)',
                            }}
                          />

                          <div className="mb-3 flex flex-col">
                            <p className="rgb(151, 151, 151) mb-0.5 font-sans text-xs text-slate-500">
                              Description
                            </p>
                            <p className="rgb(151, 151, 151) #FEFEFE font-sans text-sm">
                              {description}
                            </p>
                          </div>

                          <div className="grid grid-cols-2">
                            <div className="mb-3 flex flex-col">
                              <p className="rgb(151, 151, 151) mb-0.5 font-sans text-xs text-slate-500">
                                Training Resolution
                              </p>
                              <p className="rgb(151, 151, 151) #FEFEFE font-sans text-sm">
                                {description}
                              </p>
                            </div>

                            <div className="mb-3 flex flex-col">
                              <p className="rgb(151, 151, 151) mb-0.5 font-sans text-xs text-slate-500">
                                Base Model
                              </p>
                              <p className="rgb(151, 151, 151) #FEFEFE font-sans text-sm">
                                {description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2">
                            <div className="mb-3 flex flex-col">
                              <p className="rgb(151, 151, 151) mb-0.5 font-sans text-xs text-slate-500">
                                Category
                              </p>
                              <p className="rgb(151, 151, 151) #FEFEFE font-sans text-sm">
                                {description}
                              </p>
                            </div>

                            <div className="mb-3 flex flex-col">
                              <p className="rgb(151, 151, 151) mb-0.5 font-sans text-xs text-slate-500">
                                Strength
                              </p>
                              <p className="rgb(151, 151, 151) #FEFEFE font-sans text-sm">
                                {description}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Generate with this Model
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 mb-4 flex flex-row justify-between">
                        <h2 className="tex-lg font-sans font-semibold">
                          Images created with this model
                        </h2>
                        <button className="font-sans text-sm font-medium">
                          <div className="flex flex-row justify-center justify-items-center"></div>
                          <span>View More</span>
                          <ArrowForwardIcon fontSize="small" />
                        </button>
                      </div>
                      {/* <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                          <button
                            key={item}
                            className="mr-0 min-h-full min-w-full p-0"
                          >
                            <Image
                              priority
                              alt=""
                              className="mr-0 transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                              style={{ transform: 'translate3d(0, 0, 0)' }}
                              src={demo_picture}
                              width={220}
                              height={257}
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                            />
                          </button>
                        ))}
                      </div> */}
                    </Fragment>
                  );
                },
              )}
            </Carousel>
          </ModalContent>
          {
            !!currentImageIndex && <Button className='inline-flex absolute top-1/2 left-24 w-10 h-10 rounded-full border-white border z-auto' onClick={handlePrevious}><ChevronLeftIcon color='white' boxSize={28}/></Button>
          }
          {
            currentImageIndex!== images.length - 1 && <Button className='inline-flex absolute top-1/2 right-24 w-10 h-10 rounded-full border-white border' onClick={handleNext}><ChevronRightIcon color='white' boxSize={28} /></Button>
          }
        </div>
      </div>
    </Modal>
  );
}

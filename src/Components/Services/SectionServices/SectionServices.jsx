import React from "react";
import './styles.css';

const SectionServices = () => {
  return (
    <div className="Section-Services py-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="flex items-center">
                <div className="row w-1/3">
                    <h5>
                        Explore
                        <span className="text-green-400"> Services</span>
                    </h5>
                    <p>
                    Squadio is an exclusive network of top-notch softaware developers, deisgners, data experts, product managers and project managers in the world. 
                    </p>
                </div>  

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* <li className="col">
                    <>
                    <span className="serv-icon">
                    <svg data-v-54b9bdb9="" data-v-1ab8ea99="" width="42px" height="45px" viewBox="0 0 42 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g data-v-54b9bdb9="" id="Client" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-54b9bdb9="" id="02.01.squadio2-final-design" transform="translate(-368.000000, -1471.000000)" fill-rule="nonzero"><g data-v-54b9bdb9="" id="services-section" transform="translate(280.000000, 1162.000000)"><g data-v-54b9bdb9="" id="Group-29" transform="translate(5.000000, 252.255515)"><g data-v-54b9bdb9="" id="-ic_CTO" transform="translate(84.000000, 56.744485)"><path data-v-54b9bdb9="" d="M20.703043,25.4136658 C20.4660622,25.4136658 20.2257199,25.354248 20.0048741,25.2276917 C16.1328437,23.0188294 10.8429624,19.2986755 9.60965403,12.5415039 C9.1797272,10.1862793 9.53402189,6.41107173 11.947192,3.52108763 C13.2897468,1.91513059 15.7909863,0 20.0852122,0 C26.4994916,0 29.6733531,4.22436523 30.505643,8.17749023 C31.5090296,12.9493714 29.4104894,19.149292 23.4567259,21.7626648 C22.7434305,22.0768738 21.9118129,21.7529297 21.5978554,21.0405884 C21.2842341,20.3282471 21.608612,19.4977417 22.321235,19.1848755 C26.9001739,17.1747436 28.5153408,12.4162903 27.7465819,8.75622559 C26.963705,5.03674316 24.0997673,2.8157959 20.0852122,2.8157959 C17.5130466,2.8157959 15.5035841,3.66006472 14.1129608,5.32510378 C12.4382968,7.32986452 12.0372782,10.140625 12.3831694,12.0366211 C13.1623486,16.2999268 16.0283033,19.7149353 21.403901,22.7841797 C22.0805567,23.16922 22.3151844,24.0296021 21.9292924,24.7053528 C21.6691177,25.1588745 21.1931393,25.4136658 20.703043,25.4136658 Z" id="Path" fill="#3BD4AE"></path><path data-v-54b9bdb9="" d="M38.5885359,44 L1.4097834,44 C0.631612584,44 0,43.3692322 0,42.5921021 C0,38.0092163 0.133784928,31.5692749 1.28675513,28.5641479 C3.00041182,24.0957337 10.4005983,21.2618103 11.2386026,20.9536438 C11.9310571,20.700531 12.6994798,21.019104 13.0063783,21.6864624 C13.0507492,21.7817994 16.9493349,30.2238159 19.9813441,35.0484009 C23.0146979,30.2238159 26.9109305,21.7828064 26.9546291,21.6864624 C27.2615276,21.019104 28.0319672,20.700531 28.7224048,20.9536438 C29.5610814,21.2618103 36.9619403,24.0957337 38.6755969,28.5658264 C39.7509181,31.3655091 39.6991521,34.3713074 39.6541089,37.0239563 C39.6446969,37.5150756 39.6373018,37.9924316 39.6373018,38.4493103 C39.6373018,39.2271119 39.0056893,39.8578796 38.2265099,39.8578796 C37.4476668,39.8578796 36.8167265,39.2271119 36.8167265,38.4493103 C36.8167265,37.9763184 36.8261385,37.4821777 36.8335336,36.9742737 C36.8748792,34.5787659 36.9216031,31.863678 36.0425893,29.5725708 C35.1487853,27.2455444 31.3150752,25.135376 28.9422422,24.0859986 C27.5166601,27.0998535 23.7592544,34.8342285 21.1121289,38.402649 C20.8459037,38.7611694 20.4263973,38.9723206 19.9796634,38.9723206 C19.5329294,38.9723206 19.1130869,38.7611694 18.8471978,38.402649 C16.2024253,34.8335572 12.4430027,27.0998535 11.0164122,24.0859986 C8.64492387,25.135376 4.81121371,27.2455444 3.91942654,29.5725708 C3.2417624,31.3379822 2.87469432,35.2407532 2.8256175,41.1842041 L38.5892082,41.1842041 C39.3683875,41.1842041 40,41.8143005 40,42.5921021 C40,43.3699036 39.3677152,44 38.5885359,44 L38.5885359,44 Z" id="Path" stroke="#FBFAF9" stroke-width="0.5" fill="#422E87"></path><path data-v-54b9bdb9="" d="M19.9813441,36.6385558 C19.2021647,36.6385558 18.5715606,36.007788 18.5715606,35.2296508 L18.5715606,28.183136 C18.5715606,27.4049988 19.2031732,26.774231 19.9813441,26.774231 C20.759515,26.774231 21.3911275,27.4049988 21.3911275,28.183136 L21.3911275,35.2296508 C21.3911275,35.7479613 20.9211997,36.2175963 19.9813441,36.6385558 Z" id="Path" fill="#422E87"></path><path data-v-54b9bdb9="" d="M32.8065413,36.3482056 L28.4413893,36.3482056 C27.6625462,36.3482056 27.0316058,35.7174378 27.0316058,34.9396362 C27.0316058,34.161499 27.6625462,33.5317383 28.4413893,33.5317383 L32.8065413,33.5317383 C33.5857207,33.5317383 34.2173332,34.161499 34.2173332,34.9396362 C34.2173332,35.7174378 33.5857207,36.3482056 32.8065413,36.3482056 L32.8065413,36.3482056 Z" id="Path" fill="#422E87"></path></g></g></g></g></g></svg>
                    </span>
                    <h3>CTO as a service</h3>
                    <p>
                        Hire a chief Technology officier in a short term or long term basis to lead your 
                        devlopmenet teams and develop your technology strategy 
                    </p>
                    </>
                </li> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionServices;

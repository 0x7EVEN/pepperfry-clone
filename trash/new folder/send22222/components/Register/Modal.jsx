import { useState, useContext} from "react";
import "./Modal.css";
import img from "./images/image.png";
import axios from "axios";

import { LoginContext1 } from "../Contexts/LoginContext";
import { LoginContext } from "../../context/loginContext";


export default function Modal({ modal, handleModal }) {
  const [loginToken, handleToken] = useContext(LoginContext1);

  const {login,setLogin} = useContext(LoginContext);

  const [obj, setObj] = useState({})

    function handleInput (e) {
        const {name,value} = e.target
        setObj({
              ...obj,
              [name]:value
        })
        //console.log(obj)
    }

    async function handleSubmit (e) {
      e.preventDefault();
      const data = await axios.post(`http://localhost:4321/signup`, obj);
      console.log(data.data);
      if(String(data.data)==String({})){
        document.getElementById("show").style.display = "block";
        return;
      }
      setLogin(data.data._id);
      handleModal()
    }

  return modal ? (
    <div className="outer_div">
      <div className="inner_div">
        <div className="pic">
          <img src={img} alt="" />
        </div>
        <div className="form">
          <button
            onClick={() => {
              handleModal();
            }}
            className="close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.81591 1.35489L7.99991 6.53889L13.1626 1.37623C13.2531 1.27993 13.362 1.20289 13.483 1.14973C13.604 1.09658 13.7345 1.0684 13.8666 1.06689C14.1495 1.06689 14.4208 1.17928 14.6208 1.37931C14.8209 1.57935 14.9332 1.85066 14.9332 2.13356C14.9357 2.26434 14.9115 2.39424 14.8619 2.5153C14.8124 2.63636 14.7387 2.74603 14.6452 2.83756L9.42925 8.00023L14.6452 13.2162C14.821 13.3882 14.9241 13.6211 14.9332 13.8669C14.9332 14.1498 14.8209 14.4211 14.6208 14.6211C14.4208 14.8212 14.1495 14.9336 13.8666 14.9336C13.7306 14.9392 13.595 14.9165 13.4683 14.8669C13.3416 14.8174 13.2266 14.742 13.1306 14.6456L7.99991 9.46156L2.82658 14.6349C2.73645 14.728 2.62878 14.8023 2.50978 14.8536C2.39078 14.9048 2.26281 14.932 2.13325 14.9336C1.85035 14.9336 1.57904 14.8212 1.379 14.6211C1.17896 14.4211 1.06658 14.1498 1.06658 13.8669C1.06409 13.7361 1.08836 13.6062 1.13788 13.4852C1.18741 13.3641 1.26115 13.2544 1.35458 13.1629L6.57058 8.00023L1.35458 2.78423C1.17878 2.61224 1.07569 2.37933 1.06658 2.13356C1.06658 1.85066 1.17896 1.57935 1.379 1.37931C1.57904 1.17928 1.85035 1.06689 2.13325 1.06689C2.38925 1.07009 2.63458 1.17356 2.81591 1.35489Z"
                fill="black"
              />
            </svg>
          </button>
          <form action="" onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" name="name" placeholder="Name" />
            <br />
            <input onChange={handleInput} type="number" name="mobile" placeholder="Mobile Number" id="mob" />
            <button>VERIFY WITH OTP</button>
            <input onChange={handleInput} type="email" placeholder="Email ID" name="email" id="" />
            <br />
            <input onChange={handleInput} type="password" placeholder="Password" name="password" id="" />
            <br />
            <div id="show" style={{color:"red",display:"none",fontSize:"18px",marginTop:"10px"}}>User Already exists. Please Login</div>
            <input type="submit" className="register" value="REGISTER" />
            <br />
          </form>
          <p>By registering you agree to our Terms & Conditions</p>

          <button
            className="existing"
            onClick={() => {
              handleModal();
              handleToken();
            }}
          >
            Existing User? Log In
          </button>
          <br />

          <svg
            width="206"
            height="32"
            viewBox="0 0 206 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.844 12.186C5.656 12.186 6.36533 12.382 6.972 12.774C7.588 13.1567 8.064 13.7213 8.4 14.468C8.74533 15.2147 8.918 16.12 8.918 17.184C8.918 18.2293 8.74533 19.1253 8.4 19.872C8.064 20.6187 7.588 21.188 6.972 21.58C6.36533 21.972 5.656 22.168 4.844 22.168C4.032 22.168 3.318 21.9767 2.702 21.594C2.09533 21.2113 1.61933 20.6467 1.274 19.9C0.938 19.1533 0.77 18.2527 0.77 17.198C0.77 16.162 0.938 15.266 1.274 14.51C1.61933 13.754 2.1 13.18 2.716 12.788C3.332 12.3867 4.04133 12.186 4.844 12.186ZM4.844 13.278C4.004 13.278 3.35067 13.5953 2.884 14.23C2.41733 14.8647 2.184 15.854 2.184 17.198C2.184 18.5327 2.41733 19.5127 2.884 20.138C3.36 20.7633 4.01333 21.076 4.844 21.076C6.61733 21.076 7.504 19.7787 7.504 17.184C7.504 14.58 6.61733 13.278 4.844 13.278ZM13.9214 17.912H12.4234V22H11.0934V12.354H13.6274C14.8314 12.354 15.7414 12.5827 16.3574 13.04C16.9827 13.4973 17.2954 14.1787 17.2954 15.084C17.2954 15.756 17.1227 16.302 16.7774 16.722C16.432 17.142 15.9094 17.4593 15.2094 17.674L17.8134 22H16.2314L13.9214 17.912ZM13.7674 16.89C14.4674 16.89 14.9947 16.75 15.3494 16.47C15.704 16.1807 15.8814 15.7187 15.8814 15.084C15.8814 14.4867 15.6994 14.0573 15.3354 13.796C14.9807 13.5253 14.4067 13.39 13.6134 13.39H12.4234V16.89H13.7674ZM26.649 12.186C27.2277 12.186 27.713 12.2607 28.105 12.41C28.5063 12.5593 28.9123 12.802 29.323 13.138L28.595 13.992C28.007 13.516 27.3863 13.278 26.733 13.278C25.9303 13.278 25.2817 13.586 24.787 14.202C24.3017 14.818 24.059 15.8073 24.059 17.17C24.059 18.4953 24.3017 19.4753 24.787 20.11C25.2723 20.7353 25.9163 21.048 26.719 21.048C27.1297 21.048 27.489 20.978 27.797 20.838C28.105 20.698 28.4317 20.502 28.777 20.25L29.435 21.09C29.1363 21.398 28.7537 21.6547 28.287 21.86C27.8203 22.0653 27.2837 22.168 26.677 22.168C25.893 22.168 25.193 21.9767 24.577 21.594C23.9703 21.202 23.4943 20.6327 23.149 19.886C22.813 19.13 22.645 18.2247 22.645 17.17C22.645 16.1153 22.8223 15.2147 23.177 14.468C23.5317 13.712 24.0123 13.1427 24.619 12.76C25.2257 12.3773 25.9023 12.186 26.649 12.186ZM33.5375 14.454C34.5735 14.454 35.3762 14.7993 35.9455 15.49C36.5242 16.1807 36.8135 17.1187 36.8135 18.304C36.8135 19.0693 36.6829 19.746 36.4215 20.334C36.1602 20.9127 35.7822 21.3653 35.2875 21.692C34.7929 22.0093 34.2049 22.168 33.5235 22.168C32.4875 22.168 31.6802 21.8227 31.1015 21.132C30.5229 20.4413 30.2335 19.5033 30.2335 18.318C30.2335 17.5527 30.3642 16.8807 30.6255 16.302C30.8869 15.714 31.2649 15.2613 31.7595 14.944C32.2542 14.6173 32.8469 14.454 33.5375 14.454ZM33.5375 15.49C32.2589 15.49 31.6195 16.4327 31.6195 18.318C31.6195 20.194 32.2542 21.132 33.5235 21.132C34.7929 21.132 35.4275 20.1893 35.4275 18.304C35.4275 16.428 34.7975 15.49 33.5375 15.49ZM42.4133 14.454C43.0853 14.454 43.608 14.6547 43.9813 15.056C44.364 15.4573 44.5553 16.008 44.5553 16.708V22H43.2673V16.89C43.2673 16.3673 43.1693 15.9987 42.9733 15.784C42.7773 15.5693 42.488 15.462 42.1053 15.462C41.7133 15.462 41.368 15.574 41.0693 15.798C40.7707 16.022 40.4907 16.344 40.2293 16.764V22H38.9413V14.622H40.0473L40.1593 15.714C40.4207 15.322 40.7427 15.014 41.1253 14.79C41.5173 14.566 41.9467 14.454 42.4133 14.454ZM50.8685 21.664C50.3831 22 49.8325 22.168 49.2165 22.168C48.5911 22.168 48.1011 21.9907 47.7465 21.636C47.4011 21.272 47.2285 20.7493 47.2285 20.068V15.616H45.9405V14.622H47.2285V12.956L48.5165 12.802V14.622H50.2665L50.1265 15.616H48.5165V20.012C48.5165 20.3947 48.5818 20.6747 48.7125 20.852C48.8525 21.02 49.0811 21.104 49.3985 21.104C49.6878 21.104 50.0145 21.006 50.3785 20.81L50.8685 21.664ZM53.491 14.622V22H52.203V14.622H53.491ZM52.833 11.08C53.1037 11.08 53.323 11.164 53.491 11.332C53.659 11.5 53.743 11.71 53.743 11.962C53.743 12.214 53.659 12.424 53.491 12.592C53.323 12.7507 53.1037 12.83 52.833 12.83C52.5717 12.83 52.357 12.7507 52.189 12.592C52.021 12.424 51.937 12.214 51.937 11.962C51.937 11.71 52.021 11.5 52.189 11.332C52.357 11.164 52.5717 11.08 52.833 11.08ZM59.6262 14.454C60.2982 14.454 60.8209 14.6547 61.1942 15.056C61.5769 15.4573 61.7682 16.008 61.7682 16.708V22H60.4802V16.89C60.4802 16.3673 60.3822 15.9987 60.1862 15.784C59.9902 15.5693 59.7009 15.462 59.3182 15.462C58.9262 15.462 58.5809 15.574 58.2822 15.798C57.9836 16.022 57.7036 16.344 57.4422 16.764V22H56.1542V14.622H57.2602L57.3722 15.714C57.6336 15.322 57.9556 15.014 58.3382 14.79C58.7302 14.566 59.1596 14.454 59.6262 14.454ZM69.8453 22H68.7393L68.6413 20.852C68.3613 21.3093 68.0393 21.6453 67.6753 21.86C67.3113 22.0653 66.868 22.168 66.3453 22.168C65.7013 22.168 65.1973 21.972 64.8333 21.58C64.4693 21.188 64.2873 20.6327 64.2873 19.914V14.622H65.5753V19.774C65.5753 20.278 65.664 20.6373 65.8413 20.852C66.0187 21.0573 66.308 21.16 66.7093 21.16C67.428 21.16 68.044 20.7353 68.5573 19.886V14.622H69.8453V22ZM78.0778 18.094C78.0778 18.3087 78.0684 18.528 78.0498 18.752H73.3458C73.4018 19.564 73.6071 20.1613 73.9618 20.544C74.3164 20.9267 74.7738 21.118 75.3338 21.118C75.6884 21.118 76.0151 21.0667 76.3138 20.964C76.6124 20.8613 76.9251 20.698 77.2518 20.474L77.8118 21.244C77.0278 21.86 76.1691 22.168 75.2358 22.168C74.2091 22.168 73.4064 21.832 72.8278 21.16C72.2584 20.488 71.9738 19.564 71.9738 18.388C71.9738 17.6227 72.0951 16.946 72.3378 16.358C72.5898 15.7607 72.9444 15.294 73.4018 14.958C73.8684 14.622 74.4144 14.454 75.0398 14.454C76.0198 14.454 76.7711 14.776 77.2938 15.42C77.8164 16.064 78.0778 16.9553 78.0778 18.094ZM76.8038 17.716C76.8038 16.988 76.6591 16.4327 76.3698 16.05C76.0804 15.6673 75.6464 15.476 75.0678 15.476C74.0131 15.476 73.4391 16.2507 73.3458 17.8H76.8038V17.716ZM92.2678 14.622L90.5878 22H88.8378L87.5498 15.784L86.2198 22H84.5118L82.7898 14.622H84.0778L85.4078 21.104L86.8638 14.622H88.3058L89.6918 21.104L91.0358 14.622H92.2678ZM95.1629 14.622V22H93.8749V14.622H95.1629ZM94.5049 11.08C94.7756 11.08 94.9949 11.164 95.1629 11.332C95.3309 11.5 95.4149 11.71 95.4149 11.962C95.4149 12.214 95.3309 12.424 95.1629 12.592C94.9949 12.7507 94.7756 12.83 94.5049 12.83C94.2436 12.83 94.0289 12.7507 93.8609 12.592C93.6929 12.424 93.6089 12.214 93.6089 11.962C93.6089 11.71 93.6929 11.5 93.8609 11.332C94.0289 11.164 94.2436 11.08 94.5049 11.08ZM101.55 21.664C101.065 22 100.514 22.168 99.8981 22.168C99.2728 22.168 98.7828 21.9907 98.4281 21.636C98.0828 21.272 97.9101 20.7493 97.9101 20.068V15.616H96.6221V14.622H97.9101V12.956L99.1981 12.802V14.622H100.948L100.808 15.616H99.1981V20.012C99.1981 20.3947 99.2634 20.6747 99.3941 20.852C99.5341 21.02 99.7628 21.104 100.08 21.104C100.369 21.104 100.696 21.006 101.06 20.81L101.55 21.664ZM106.357 14.454C107.029 14.454 107.551 14.6547 107.925 15.056C108.307 15.4573 108.499 16.008 108.499 16.708V22H107.211V16.89C107.211 16.3673 107.108 15.9987 106.903 15.784C106.707 15.5693 106.417 15.462 106.035 15.462C105.652 15.462 105.311 15.574 105.013 15.798C104.714 16.022 104.434 16.3393 104.173 16.75V22H102.885V11.668L104.173 11.528V15.644C104.751 14.8507 105.479 14.454 106.357 14.454Z"
              fill="#596988"
            />
            <path
              d="M142 0.639893C133.516 0.639893 126.64 7.51669 126.64 15.9999C126.64 24.4831 133.516 31.3599 142 31.3599C150.483 31.3599 157.36 24.4831 157.36 15.9999C157.36 7.51669 150.483 0.639893 142 0.639893ZM145.638 11.2543H143.329C143.056 11.2543 142.752 11.6143 142.752 12.0927V13.7599H145.64L145.203 16.1375H142.752V23.2751H140.027V16.1375H137.555V13.7599H140.027V12.3615C140.027 10.3551 141.419 8.72469 143.329 8.72469H145.638V11.2543Z"
              fill="#29529B"
            />
            <path
              d="M203.074 13.3887H202V13.3334H190V18.6667H197.536C196.436 21.7714 193.482 24.0001 190 24.0001C185.582 24.0001 182 20.4181 182 16.0001C182 11.5821 185.582 8.00008 190 8.00008C192.04 8.00008 193.895 8.76941 195.308 10.0261L199.079 6.25475C196.698 4.03541 193.512 2.66675 190 2.66675C182.637 2.66675 176.667 8.63675 176.667 16.0001C176.667 23.3634 182.637 29.3334 190 29.3334C197.364 29.3334 203.334 23.3634 203.334 16.0001C203.334 15.1061 203.242 14.2334 203.074 13.3887Z"
              fill="#FFC107"
            />
            <path
              d="M178.204 9.79408L182.585 13.0067C183.77 10.0721 186.641 8.00008 190 8.00008C192.039 8.00008 193.895 8.76941 195.307 10.0261L199.079 6.25475C196.697 4.03541 193.512 2.66675 190 2.66675C184.879 2.66675 180.437 5.55808 178.204 9.79408Z"
              fill="#FF3D00"
            />
            <path
              d="M190 29.3333C193.444 29.3333 196.573 28.0153 198.939 25.872L194.813 22.38C193.429 23.4322 191.738 24.0013 190 24C186.532 24 183.587 21.7886 182.478 18.7026L178.13 22.0526C180.337 26.3706 184.818 29.3333 190 29.3333Z"
              fill="#4CAF50"
            />
            <path
              d="M203.074 13.3886H202V13.3333H190V18.6666H197.535C197.009 20.1442 196.062 21.4354 194.811 22.3806L194.813 22.3793L198.939 25.8713C198.647 26.1366 203.333 22.6666 203.333 15.9999C203.333 15.1059 203.241 14.2333 203.074 13.3886Z"
              fill="#1976D2"
            />
          </svg>
        </div>
      </div>
    </div>
  ) : null;
}
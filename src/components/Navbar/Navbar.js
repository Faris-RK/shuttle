import * as React from "react";
import Logo from "../../assets/logo.png";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import logoUser from "../../assets/logoUser.svg";
import logoDropdown from "../../assets/logoDropdown.svg";
import logoUser2 from "../../assets/logoUser2.svg";
import singoutIcon from "../../assets/singoutIcon.svg";
import { useState, useEffect } from "react";
import { logout } from "../../redux/actions/auth";
import { history } from "../../helpers/history";
import { clearMessage } from "../../redux/actions/message";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../redux/services/user.service'
import { userData } from "../../redux/services/auth.service";
import { store } from "../../redux/services/auth.service";

function Navbar({ showModal, closeModal }) {
  //  state ========================================================================================//

  const [drop, setDrop] = useState(false);
  const [buttonActive, setButtonActive] = useState();


  const { auth: user, isLoggedIn } = useSelector((state) => state.auth);
  const [nameUser, setNameUser] = useState("");
  // console.log(isLoggedIn);
  const [dataUser, setDataUser] = useState("");
  const dispatch = useDispatch();

  const Token = store.getItem("user");
  let fullName = nameUser;
  let firstName = fullName.split(" ")[0];

  // console.log(Token, "token");

  //  Function ========================================================================================//

  const dropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  const buttonSelected = (e) => {
    setButtonActive(e.target.innerHTML);
  };

  //  UseEffect ========================================================================================//

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    userData(Token).then((response) => {
      setDataUser(response?.data?.data);
      setNameUser(response?.data?.data.fullname);
      console.log(response.data.data.fullname, "ini data user");
    });
  }, []);

  return (
    <div className="container" history={history}>
      <div className={styles.navbarContainer}>
        <nav>
          <>
            <Link to={"/"}>
              <img className={styles.logoNavbar} src={Logo} alt="logo" />
            </Link>
            <div className={styles.navList}>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li>
                  <Link to={"/SearchBus"}>Search Bus</Link>
                </li>

                <li>
                  <Link to={"/MyBookingExact"}>My Booking</Link>
                </li>
                <li>Check Booking</li>
              </ul>
            </div>
            {/* {isLoggedIn ? (
             
              // <>
             
              
              //   <div className={styles.ContainerDropdown} onClick={dropDown}>
              //     <img src={logoUser} alt="" />
              //     <p>sandi</p>,
                 
              //     <img src={logoDropdown} alt="" />
              //   </div>
              //   <div
              //     className={
              //       drop === false ? styles.dropdownNone : styles.dropdown
              //     }
              //   >
              //     <div className={styles.sectionDropdown}>
              //       <div
              //         className={
              //           buttonActive === "Account"
              //             ? styles.btnActive
              //             : styles.userDropdown
              //         }
              //         // onClick={buttonSelected}
              //       >
              //         <img
              //           className={styles.iconDropdown}
              //           src={buttonActive === "Account" ? logoUser2 : logoUser}
              //           alt=""
              //         />
              //         <p className={styles.titleUser} onClick={logOut}>
              //           Account
              //         </p>
              //       </div>
              //       <div
              //         className={
              //           buttonActive === "Sing Out"
              //             ? styles.btnActiveSingout
              //             : styles.userDropdown
              //         }
              //       >
              //         <img
              //           className={styles.iconDropdown}
              //           src={singoutIcon}
              //           alt=""
              //         />
              //         <p className={styles.titleUser} onClick={logOut}>
              //           Sign Out
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              // </>
              
            )  : ( */}
            { isLoggedIn === false ? (
              <div className={styles.btnContainer}>
                <button
                  className={styles.btnSignin}
                  onClick={() => showModal("choiceSignIn")}
                >
                  Sign in
                </button>

                <button
                  className={styles.btnSignup}
                  onClick={() => showModal("choiceSignUp")}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <>
                <div className={styles.ContainerDropdown} onClick={dropDown}>
                  <img
                    className={styles.avatarProfile}
                    src={dataUser.profile_picture}
                    alt=""
                  />
                  <h1 className={styles.userName}>{firstName}</h1>
                  {/* {nameUser && nameUser.length && (
                   
                  )} */}
                  <img
                    className={styles.iconDownArrow}
                    src={logoDropdown}
                    alt=""
                  />
                </div>
                <div
                  className={
                    drop === false ? styles.dropdownNone : styles.dropdown
                  }
                >
                  <div className={styles.sectionDropdown}>
                    <div
                      className={
                        buttonActive === "Account"
                          ? styles.btnActive
                          : styles.userDropdown
                      }
                      // onClick={buttonSelected}
                    >
                      <img
                        className={styles.iconDropdown}
                        src={buttonActive === "Account" ? logoUser2 : logoUser}
                        alt=""
                      />
                      <Link to={"/Profiledata"}>
                        <p className={styles.titleUser}>Account</p>
                      </Link>
                    </div>
                    <div
                      className={
                        buttonActive === "Sing Out"
                          ? styles.btnActiveSingout
                          : styles.userDropdown
                      }
                    >
                      <img
                        className={styles.iconDropdown}
                        src={singoutIcon}
                        alt=""
                      />
                      <p className={styles.titleUser} onClick={logOut}>
                        Sign Out
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>

          {/* <button className={styles.btnSignup}>Sign Up</button>{" "} */}
          {/* DROPDOWN ============================================== */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

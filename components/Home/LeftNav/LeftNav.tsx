"use client";

import Link from "next/link";
import Chip from "../../CustomComponents/Chip";
import Icon from "../../CustomComponents/Icon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CameraIcon from "@mui/icons-material/Camera";

import styles from "./LeftNav.module.scss";

function LeftNav() {
	return (
		<nav className={styles.left_nav}>
			<div className={styles.left_nav_container}>
				<Chip link={"./home"} label="home" Icon={<HomeRoundedIcon />} />
				<Chip link={"./moment"} label="moment" Icon={<CameraIcon />} />
				<Chip
					link={"./discover"}
					label="discover"
					Icon={<ExploreRoundedIcon />}
				/>
				<Chip
					link={"./notification"}
					label="notification"
					Icon={<NotificationsRoundedIcon />}
				/>
				<Chip link={"./chat"} label="chat" Icon={<ChatRoundedIcon />} />
				<Chip link={"./me"} label="me" Icon={<PersonRoundedIcon />} />
			</div>
		</nav>
	);
}

export default LeftNav;

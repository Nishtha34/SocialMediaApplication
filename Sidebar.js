import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom'
import Avatar from "@material-ui/core/Avatar";


function Sidebar({ user }) {
    const url = '/' + user?.displayName + '/' + user?.uid;

    return (
        <div className="sidebar">
            <Link to={url}>
                <SidebarRow avatar ImageLink={user?.photoURL} title={user?.displayName} />
            </Link>
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png" title="COVID-19 Information Centre" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" title="Find Friends" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" title="Groups" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" title="Marketplace" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" title="Videos" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" title="Events" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png" title="Memories" />
            <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" title="Saved" />
            <SidebarRow ImageLink="https://www.clipartmax.com/png/small/213-2137532_book-a-taxi-icon.png" title="BookCar"/>
            <SidebarRow ImageLink="https://www.iconpacks.net/icons/1/free-icon-question-1149.png" title="Queries"/>
            <SidebarRow ImageLink="https://image.shutterstock.com/image-vector/popular-social-media-instagram-reels-600w-1792997581.jpg" title="Reels"/>
            <SidebarRow ImageLink="http://getdrawings.com/free-icon/instagram-story-icons-74.jpg" title="Stories"/>
            <SidebarRow ImageLink="https://thumbs.dreamstime.com/b/counter-friend-request-quantity-follower-notification-symbol-instagram-buton-social-media-counter-friend-request-quantity-136664238.jpg" title="FriendRequest"/>
            <SidebarRow dropdown ImageLink="null" title="See more" />
            <div className="hr" />
            <div class="policies">
                <p>Privacy</p>
                <p class="dot">·</p>
                <p>Terms</p>
                <p class="dot">·</p>
                <p>Advertising</p>
                <p class="dot">·</p>
                <p>Ad choices</p>
                <i class="ads" />
                <p class="dot">·</p>
                <p>Cookies</p>
                <p class="dot">·</p>
                <p>More</p>
                <p class="dot">·</p>
                <p>Unite © 2020</p>
            </div>
        </div>
    )
}

export default Sidebar

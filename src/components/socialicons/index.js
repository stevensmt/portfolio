import React from "react";
import "./style.css";
import {
  FaReadme,
  FaCoffee,
  FaLaugh,
  FaRegEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.cv && (
          <li>
            <a href={socialprofils.cv}>
              <FaLaugh />
            </a>
          </li>
        )}
        {socialprofils.email && (
          <li>
            <a href={`mailto:${socialprofils.email}`}>
              <FaRegEnvelope />
            </a>
          </li>
        )}
                {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}

      </ul>
    </div>
  );
};

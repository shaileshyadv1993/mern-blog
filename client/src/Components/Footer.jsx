import {
  Button,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex  md:grid-cols-1">
          <div className="mt-5">
            {/* Logo */}
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Shailesh's
              </span>
              BLog
            </Link>
          </div>
          <div className="grid grid-col-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About */}
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </FooterLink>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shailesh's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            {/* Follow Us */}
            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/shaileshyadv1993"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            {/* Ligal */}
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider className="" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Shailesh's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-1 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon
              href="https://www.github.com/shaileshyadv1993"
              icon={BsLinkedin}
            />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

# Licence and rights notices

Campus Köthen source code is licensed under `AGPL-3.0-only`. The components
listed below remain subject to their own licenses and are not relicensed under
the GNU Affero General Public License.

`LicenseRef-ThirdParty-Components` in the container metadata refers to the
components documented here and in the SPDX SBOM attached to each image.
`LicenseRef-Website-Assets` refers to the separately permitted website images
listed below.

## Website images and branding

Erik Engler created `campus-koethen-logo.png`, `campus-koethen-icon.png`,
`site/og.png`, `site/campus-koethen-footer-icon.jpg`,
`site/app-news-screen-de.jpg` and `site/app-news-screen-en.jpg`, including the
editorial text shown in the screenshots. He has permitted their use on this
website. The rendered Tabler Icons in the screenshots retain their MIT license
as described below.

These files are not licensed under `AGPL-3.0-only`. This website-specific
permission does not grant third parties a general right to reuse the files
commercially. Any such use requires separate permission from the rights holder.

## Albert Sans

Copyright 2021 The Albert Sans Project Authors
(https://github.com/usted/Albert-Sans)

Albert Sans is distributed under the SIL Open Font License, Version 1.1. The
complete license text is included at `site/fonts/AlbertSans-OFL.txt` and is
served by the website at `/fonts/AlbertSans-OFL.txt`.

## flutter_tabler_icons and Tabler Icons

The app preview displayed on this website contains rendered icons from
`flutter_tabler_icons` version 1.43.0, which includes Tabler Icons version
3.19.0. No package source code or icon font is served by this website.

`flutter_tabler_icons` is available from
https://pub.dev/packages/flutter_tabler_icons and
https://github.com/bigbadbob2003/flutter_tabler_icons. Tabler Icons is
available from https://github.com/tabler/tabler-icons.

Copyright (c) 2020 bigbadbob2003

Copyright (c) 2020-2024 Paweł Kuna

Both projects are distributed under the MIT License:

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## nginx and the official nginx container image

This product contains software provided by Nginx, Inc. and its contributors.

The runtime image is based on the official `nginx:1.31.4-alpine` multi-platform
image, pinned to
`sha256:db35bfc6b2951e7f8a72db5db120288c127ffaeeb4a6d4b95a26fead017d5913`.
The official Dockerfiles and source are available at
https://github.com/nginx/docker-nginx and https://github.com/nginx/nginx.

nginx is distributed under the following BSD 2-Clause license
(https://github.com/nginx/nginx/blob/release-1.31.4/LICENSE):

> Copyright (C) 2002-2021 Igor Sysoev
> Copyright (C) 2011-2026 Nginx, Inc.
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
> 1. Redistributions of source code must retain the above copyright notice,
>    this list of conditions and the following disclaimer.
> 2. Redistributions in binary form must reproduce the above copyright notice,
>    this list of conditions and the following disclaimer in the documentation
>    and/or other materials provided with the distribution.
>
> THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND ANY
> EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
> WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY
> DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
> (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
> LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
> ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
> (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
> SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The official nginx Dockerfiles have their own BSD 2-Clause copyright notice
(https://github.com/nginx/docker-nginx/blob/master/LICENSE):

> Copyright (C) 2011-2023 F5, Inc.
>
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
>
> 1. Redistributions of source code must retain the above copyright notice,
>    this list of conditions and the following disclaimer.
> 2. Redistributions in binary form must reproduce the above copyright notice,
>    this list of conditions and the following disclaimer in the documentation
>    and/or other materials provided with the distribution.
>
> THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS "AS IS" AND ANY
> EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
> WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY
> DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
> (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
> LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
> ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
> (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
> SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Alpine Linux and runtime packages

The nginx runtime image is based on Alpine Linux and contains Alpine packages
under their respective licenses. Package sources and license declarations are
available from https://gitlab.alpinelinux.org/alpine/aports and
https://pkgs.alpinelinux.org/.

The GitHub Actions build publishes an SPDX software bill of materials (SBOM)
with every container image. It records the detected package versions and
declared license identifiers for each architecture-specific image. The SBOM
does not replace the packages' full license texts or establish that every
component and obligation has been identified.

## Node.js build image

The build stage uses the official `node:24-alpine` multi-platform image, pinned
to `sha256:d32cdf619f63fe0471182d08996dd516c6275bb5fd31ae06e55a570bd9e1ad43`.
This build stage is not included in the final runtime image. Its sources and
license information are available at https://github.com/nodejs/node and
https://github.com/nodejs/docker-node.

## Platform names

App Store is a service mark of Apple Inc., registered in the U.S. and other
countries and regions. Google Play is a trademark of Google LLC. These names
are used only to identify the stores in which the app is intended to become
available. No Apple or Google logo or badge artwork is included in the website.

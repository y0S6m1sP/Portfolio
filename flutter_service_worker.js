'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6afec4125c345806bc3ce6f0434a8c5e",
"version.json": "009c9e65172e010890f7f65fde438006",
"launcher.png": "d2ab82a7cb4ee9ef019d887c6b6ae6a6",
"index.html": "b7236a69b9d0cb17f905eb27bbb58a30",
"/": "b7236a69b9d0cb17f905eb27bbb58a30",
"main.dart.js": "b3206ae8e2f12726c8992304b68cafb5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"README.md": "fa02b0818ca4c2dc395bb8b0ef23fb17",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "0704945bde6810244d5481a562897c4e",
".git/config": "60c851096369ef5b196c2e3da4143b1e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/cac823e25b842c980f5ca3c6433d736076efbc": "f5f0fe00c77c3d886b2e6eaeeb36aafa",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/a6edaef38630fe5b019f80e539d771debc586d": "34f3e22363edbe51d9ea6ba4ef33bd03",
".git/objects/03/d9d6179591bcfdc463ee0c70c6cbd02efb2d58": "f759f524c15e4a7edfb7d3116a2cadef",
".git/objects/6a/5f8e52bb1b513fb04c9985ecfaeac70c7cc8d2": "8f119e5982f21f4e3600c29d16bb171d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/b6b6df0780eda0894e177fc216e850329098ae": "36d8631f825b51c1c0d7f65c1f1d0916",
".git/objects/3d/0568c6192caded8976486446a1bfc6691c616e": "99cc41deee833b6a89dfa2b2dc47f29f",
".git/objects/58/f08545e1226f2c2c883e4171bd49aaa9bf1f26": "2fb9224f553d596b340b770f91201373",
".git/objects/58/3651671f55bdf74b569a39f528ad922496e48f": "5fc969d189b90f4d4a0921c5a4de229a",
".git/objects/5a/782fe7fdbde57cd9a7cfcd34d2b3ad30b57291": "4227a4e33a3907c49a471a02995bdc27",
".git/objects/5f/0111fff22b6c927b2e6cc6beab590009426bde": "108469d7fc3cd2eff61051676e8ebea6",
".git/objects/33/d3403312e26580a1b5923ca198a91cdf8012f1": "eb3965022fa1b010f066cab2b13bb7a7",
".git/objects/a3/d0df38ac9f91ed3aa1376d8a1e3627cb8a8925": "90914caf997e9d41145458d98178d77c",
".git/objects/a3/e03bbe98b94e6cfdeab9d2a42082797e062adb": "997852f4701b66f5ba51e508e4486360",
".git/objects/b5/6ce73ced5ddcf9e587bfb53e5a1810fa4969bd": "3a1f55c1bd524cf450baa100ba5d308b",
".git/objects/d9/01a2dbbbcbc9b6a34d8a8e8ebbc2140f9e247d": "0c9488daf3a881827c2d98d24acf7651",
".git/objects/bb/c73b8459b2c3b53508af74bab135a3ff1dbb3a": "8378dc41c8494754a74234a58d1f0392",
".git/objects/d7/7e88330ccfb3c9032766e81185e3e9df1d22c3": "5a08af6b4135383159c94334f9221f57",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/55a6e970e760846d19f1194c5c4ea3970534c2": "0b734cabe8dd9f6a56ecdbf48bfbda70",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a5/1e7eaa9f7a9b2e96ca858437d07afe4335eff3": "c095c602bfb8f6cbe54e6a261ae6ce57",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0d29a2b109caa7704aab8c8cd58dc5f326235c": "191eb2e1ab59b7d4e2e16e9295ded092",
".git/objects/bc/e1bd89653472f1c25d55e94a73e660d9a863d8": "fa97bf23ab50fe47c33ba8a622452301",
".git/objects/ab/9d9664ee12a2d48cfdb13232702f52bdf21722": "fa0c7c1a05905cd890d5a1625925b2f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7d6451cc866e133861e60524b165c555207641": "a7bc16761512e626c944f7d38a45ec43",
".git/objects/fc/8dd292bb7556cea8ba4783ed17c0009ebf4e76": "b9cb9f899de9d8005dd59abf20a49c4f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/11059620b7a7912a3816bcca123a0c9aa37332": "7a07a6b572229aab5ee6def001686b22",
".git/objects/cf/e7689e5551fbed07f4099b2a27ed5f5d10ce50": "7bb8528f6e2fce3665253b1846d49ff4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/425cdae9a31c641a2d470ddf504719767839ce": "2bbb7a912c17fd4c36c1bc6da202a3e9",
".git/objects/fe/915b60ca96cfc858f60825ba7ef2ca8ec94772": "546923963777333a0cd77bf427e4d533",
".git/objects/ed/8ebda0bf53bd08e8edad35f64196ffbd645709": "34111deb3858272b0de065c81d9d4301",
".git/objects/20/9fd5b80e2e9e73e6bac15fe4de9ac2b7c40f19": "6a64c6169d6e216aa783c89d8f143ea4",
".git/objects/27/b32fb37bf4e9816827ba2913a7e3cfd9c87533": "5c43c748567068f69e1a7f96d17a0de5",
".git/objects/29/4f14d5f43307f0110d133ac7cbe0479cf6b740": "460db5746ee5e2d3b8ca98548a8b0773",
".git/objects/42/058f079af0dde8df6f805dbc233738ee17c45a": "fb786cc2924b1717cfd5498e9667c144",
".git/objects/45/4f9739de285f45a06b22a1bfa9e4f6e3e26783": "31822f22d086dde397b16e37bab0aff7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/6752bc49ec98e648cf9443c33156e94479af6e": "a58867487116ee5a01bc5ff9719cb2c6",
".git/objects/28/4c199b36ae0e1a028e1a52e4ad708ad240efb2": "ca3255446a9a377abe30d75bb8c26f9f",
".git/objects/28/742b7e925d637528ea71e713482e51a1e1cb06": "daa6bdb320f6e370b0b561aaae7b0833",
".git/objects/7b/4385dc2b929795f35f96a0ed0027c4f419fbe6": "e3ed023d26f2820edc97ea802966acc9",
".git/objects/7b/8526753dd1efb2d9dbf86dbcebecc5933688fc": "99c05f63ad28b30fedd082c8a11c0646",
".git/objects/8f/260157416c5d996c28d56af868fb807bdb9546": "9cfe8ab4ffdbdaad37ddaa89b0340e0f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/b86292aed20c1d1d46ffd12ef7d4278175854f": "1df433ef2015d6119333104006b2a873",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/4b89ea430ebaa001a9600ffb42049836bb3862": "ab8c328e2509e99e1b914042a4f1111f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1678a80851cc1979fc1730d7b7809fa31a5a2b": "d237f86d52455e3289a9640b314bcfe2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/69b7dc06520a44ae298b7acde263e66d7230b4": "2c90b7474adea6f508e100098ec1c926",
".git/objects/00/14ac14c9bd545a92e87893af738bae434c0a64": "d47c534e1c292d2d7d8920fcc9a2b2fe",
".git/objects/6e/c90134b07f96752857b43349a510a22e8f08a1": "b33cdd56229272570257be213755b555",
".git/objects/5c/eb0942b40166f29b16202a6814d5fa7bc1616b": "0fade9808d0b6f72b7b5e01f6328eea9",
".git/objects/09/87d8139b19641ded7c0e6df94cc1baf78371d2": "02cb6d5af12f070c2b20ca7c231ca0c0",
".git/objects/09/855e375d8186b04650ddce4c2c208e83e0b81b": "4a98fd5e00cfdbe2aaf6d5d71f9cd26b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/554685630efb244d43a92aaf652dbcdefb7971": "7c2f2a8d59bce7fff5c5e33ba388e356",
".git/objects/98/b57452070dc03cda6badf17eeeac4b0e0bea51": "012e8d573e6417afcdd011e9ee28cf5b",
".git/objects/98/2e3308fbfa407003a8aaa2e70c1c28115e71fc": "f5966511269c5df6fec22605e3b19aaf",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/895b5d5980f5bb25a668174d345e0dcd02cc1f": "a8e950915e5164d7fdc63e2f446e8320",
".git/objects/30/2ebfce298a3a17fe0c7eed9d942fc143ed5b6d": "78bbb9d5cb4d4865e3e343895735b2c9",
".git/objects/5e/3effa879822b900de769a63b18844b79a5cd82": "24c684da7cc277e6d4a57f22ceed5797",
".git/objects/5b/7f45a4ffb06804aa3734f329e75594bc5f0f8a": "fe3092e1e7884031e3a7d4f36855207d",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/37/6c641340a825e0945dc275315b1dcea48916df": "07ee335b57787dba05385a4e85ab7c9c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/8907a6fb694f4487252c3fe1fc1ae4dc3ebf3d": "2e9201f67dcb8bff184b91752cb5558a",
".git/objects/01/10fbe94fa4f8371db4824677231404ff13cdbc": "b75acd65fb659fd1dbcb04ac28f4190d",
".git/objects/06/c3a0dc28377c2ecca783e7adce3e51a8547f36": "cdcfc235fe845a89c12def1ef33f2240",
".git/objects/6c/1c4c3d7f964b21e8aa68a4fb3c00a4d6a0fab9": "a19a023f615d78e3bac3db9e0c754ed9",
".git/objects/6c/8074ef5417a1d1a516dc5e147808b05af935cd": "b38ca4652fa5470d82a2a9f969689e86",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/55/9aaf8ca2caa2158ac7fb812a0b7a1de999ef4e": "096d9e9a4c5f6386d8a34f9464d41a1c",
".git/objects/97/7e2420570403e48118531592157816a75f1cee": "6f737b1151bcc36e1ece4a98db659792",
".git/objects/97/28e5cba6cfa0c186d3605c1dcc65d764c89dd6": "ebdda33e1d8495018d0beb244e906e5a",
".git/objects/97/32c1eb15b0aeaf43eecb4a7250ca52ba04028a": "dd21999722cdf611561b6df7d9200ced",
".git/objects/0f/0878ee39f3eef527bd4dfd52babd869eee9df7": "7a78d13aae5548f830df3a2c412d8ffd",
".git/objects/0f/c4801a7814527daecbe8a388e0e3b2f00cd684": "e6c4ee5536c2701e1c538f509ddfe968",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/65101f3e81cb82de6f93f43b5770ae0fdd7104": "7d4cfd6b9402767c29001e87284ae158",
".git/objects/b6/1017d3a45d648143269dc8123956c521c461ec": "fda3e8f1635658eb17d789200fe3b487",
".git/objects/b6/548349e1d07e025dba8afa331d7f87e50a51e9": "63a370e270fc316ec3235308b625530f",
".git/objects/a9/37eab1ac9039d9511c30277300e642d5a5d6d1": "f8c74f06cc33f4a434b4173fb9a3b27d",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d2/8f2055ea1a6dce3423089c45e31290dbc039c6": "c0cde6b2347354d3cb267ebe411fb13c",
".git/objects/d2/df16ff250a55e6c985a8b223fb91a1b88d60a2": "c307731eeb08c7ee32640c35493d3a4f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/50b43e689f350579e5925a86f695fa8e489426": "395e4fc5b6746557a8551c4877f4b293",
".git/objects/db/04a71e07448f25859fb309d836f62c0284d1b5": "f6aa679120075af4d40efa8a2d267032",
".git/objects/db/1d41828ab8793231e9c3fbd51e28f471d8038d": "6a010f0acc78c20ac7d6a4d04d401d98",
".git/objects/db/75d8dcf8aaa3009e1fde55f8c6440e2c24e461": "2aa828913628957b456d94ce53328d3f",
".git/objects/a6/8954cb26b9aba7088d7eb9ecdee2e8eae5ec4e": "7470b157373782306f338473e3836e61",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/7c8d914aa65fc76c15eda66c57e318540c8094": "b29321ba167c747cf1cb95e87c4969c3",
".git/objects/ef/b92bb8959a26d3f036c30430be4838a4d92e2e": "6730110bd52acd97c30d35f408b67277",
".git/objects/c3/b4a2b51124184ff7d8e53a6ea2d9cacd8238c6": "7d21f40845b0d950ce504f54180a9cb2",
".git/objects/ff/003d2804b0b2eecfc93f08e0bf38217086f870": "edaa1406330ea972c20e0ab819a0a03f",
".git/objects/ff/b451a18850c557382faa1da2b51a084008721d": "f572c6de4d5a610f322167dd9d301cf7",
".git/objects/c5/14b44546841949ceeebb2ae68402160a06f9de": "a8d9c4b604cf6d70382ad4c042e10aaf",
".git/objects/c5/73cc7098230f437ba6f766bdd09e20aaaa432e": "a6cfbc0249f15ef79a23f7aefa3f14c7",
".git/objects/ce/25da2a63b2f198c5978dd7ad84abd487d1c79a": "2ccd0de8a2069c83101c129e419ba86e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/cff3c5a9c1ebe4cb1c920e0a3c0842e7f7d68e": "ab860be31c3673dc12381d8947de834f",
".git/objects/2d/c6ae93809c0cd45654f5f15ecf04c8eade4bd1": "cc105e14cc30213083dfea7e5a5b642e",
".git/objects/41/20a5df2a9232528c15869a09de57a0306453ab": "c71c3c54e1a7f5fdd36d1b6d50e0754d",
".git/objects/83/5c538fd8730be18e1cf9a189c59c9df1b0198d": "58607e169e09edab6c48b9b01e838913",
".git/objects/70/6d0684c39003e02c6d0c8fd40cc9c34b4ea0b7": "085184837c8b9bfd140e1ed5afd914ee",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/054352250a437023157592a33099694fbbf14c": "9f7d31ecb52bd98d23eeacd854cadff5",
".git/objects/23/290fd83939b98c005d026d8bffeff92b46e390": "7d6d2969307cb710283577ea18c47197",
".git/objects/4f/3a63de81d3c55a41bc9b10c2a483d6cd22af2b": "90895d38b0d7f23b9c1e254997b7c877",
".git/objects/12/22463aa760cd4aa00fd910af706cd5401349e5": "5d7ab04f1bb4a28cb5c303f8fe23b18b",
".git/objects/12/678ca1b5b55c8c24b6d812301765faac1e3906": "aad840d65e001fcf5cb2a45f96f06e90",
".git/objects/8c/587e3a71d32d579b4acedd651bcbd4eb9eeae7": "43d4ef197beb79bad5a45b3483afd9fe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/e0b1623b414e8d8ce682b2c2b7d503e998ffad": "241832aa50bc0d2a4e5a520dd93a7095",
".git/objects/71/114a9414e12bad6b74d77d82a8b8e3750ef8b3": "f294a515227bbd25a43eb516a96fb738",
".git/objects/71/bc479b8d28bd4d8c6bad9741fba4565ad7ad41": "267efbaab4fe8e760f1545bc2f8a8667",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/c305f9431b5d537e35371058717ca98816ddab": "8448dab9c95f84a1fb609e60f1bde0b8",
".git/objects/2b/12b7d592641729a36933de7d74c329fd677b84": "5c334eb82150f1337d130927f2587592",
".git/objects/47/f3966ed653deb5c914cfcc18218098d6fad58d": "3c05df147e41cd11527b058b7bb223eb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/d1516b7624727d2b49ec3bb6c3e07eec594c9f": "7215e60c40505f04551a4a1dfbd2991f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b384a94b1372f1075c186bcdd7545bc4",
".git/logs/refs/heads/main": "a6d946b0c7a22b69599fb2120653e69d",
".git/logs/refs/remotes/origin/main": "c5a2b6ffcea1fddc9c717ad1607c8442",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0704945bde6810244d5481a562897c4e",
".git/refs/remotes/origin/main": "b67fe9f95fca312ec5d7fb0aa3eb062e",
".git/index": "9b968553ccf0504029ecfd475c167936",
".git/COMMIT_EDITMSG": "dfe93c811dd53796eb83421d6be2644b",
".git/FETCH_HEAD": "6ab45287e9ab32e9810e148995888b5f",
"assets/AssetManifest.json": "f4ef6e62e208f1f220d10f302ebd50d2",
"assets/NOTICES": "3834ab7ae72ffa754b95f1bd23c50e54",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "db56e6a1aabdb79fcb8b3ed05e4d1eee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2db610217ad9f7dcf0ad3d904a63f8b7",
"assets/fonts/MaterialIcons-Regular.otf": "865f81fa075fd372116e5cc8d4a4046f",
"assets/assets/images/jira.png": "9b30a9d999f901d406ab1d0cedfaaf62",
"assets/assets/images/git.png": "42f2cb3c804c535583c156cf20f2beb1",
"assets/assets/images/whisper-icon.png": "cd90dadd465bfa186b032aedf446f399",
"assets/assets/images/metropia-logo.png": "8a24049cfa3833ad022443c96c1fa575",
"assets/assets/images/flutter.png": "026afa02d18994e67ec00de6a66e4e7b",
"assets/assets/images/freelancer-logo.png": "eec3a3fbd79eb84f529d6096e67fdcc1",
"assets/assets/images/portfolio-logo.png": "68a46d0e4dd63bb1152fb667421af465",
"assets/assets/images/firebase.png": "c956738c985dceb39da977105ae2fa4b",
"assets/assets/images/java.png": "521b4d733ab8528c755c667cc6033403",
"assets/assets/images/uic-logo.png": "be2e802580fde76cbda44eab3b7c122c",
"assets/assets/images/android.png": "c7c5f364f00c25e250676ed9223bd518",
"assets/assets/images/pacerfect-icon.png": "4aabab66bd868e83847246d80347bc00",
"assets/assets/images/diary-icon.png": "46e68085826f63f7c58556068a24ab1a",
"assets/assets/images/diary-portfolio-2.png": "77f9e635e8df5278dbde734cef3e0ddf",
"assets/assets/images/avatar.png": "5225bb606086de3b4bf13979d023cede",
"assets/assets/images/diary-portfolio-1.png": "90069a74b8ce70688ac53ba9cc15faae",
"assets/assets/images/recipe-portfolio-2.png": "3528b1ecc8aa2deac75dc69092fab09f",
"assets/assets/images/postman.png": "5b435cf1abff992744bda329d6f2c36b",
"assets/assets/images/recipe-portfolio-1.png": "a1c24a3e7ed606e38af524ee049e2a72",
"assets/assets/images/recipe-icon.png": "6529c2924b07aeb10864a181600bcf5e",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/whisper-portfolio-1.png": "cf561a5241fcedabf5aad54884dc115c",
"assets/assets/images/whisper-portfolio-2.png": "271b131b44a7b9b0b9657dffaaa42522",
"assets/assets/images/pacerfect-portfolio-2.png": "a2e8ce4cda67962ae023f9d42e77a8b1",
"assets/assets/images/dart.png": "fa159c09e72cb38d6c840c90b8371604",
"assets/assets/images/pacerfect-portfolio-1.png": "f3eed9080fc47d2f623195a178c107a2",
"assets/assets/images/kotlin.png": "748170ff1ac02219c361dfdf9f84bd8b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

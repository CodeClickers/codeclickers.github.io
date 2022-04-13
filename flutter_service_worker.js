'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1f19a2f74526f50186571172bc5f1d03",
"assets/assets/home_tiles/ca/Angle.png": "7ae40d761842e3c58e9110ea5cb76e5f",
"assets/assets/home_tiles/ca/Angle_Dark.png": "6a64a90be54267561b6a3a4fcfdaba7a",
"assets/assets/home_tiles/ca/Area.png": "d9780c2cdddd9de1b6cbc3ab51a7b0c5",
"assets/assets/home_tiles/ca/Area_Dark.png": "0725d8dbd3d23bf775622e65350070be",
"assets/assets/home_tiles/ca/Data%2520Transfer%2520Rate.png": "dbba9b661bca4892df36ec903e9063bc",
"assets/assets/home_tiles/ca/Data%2520Transfer%2520Rate_Dark.png": "f12ac2ffa20f0026ee2f081f1b680969",
"assets/assets/home_tiles/ca/Digital%2520Storage.png": "06193a821c2d6c61b9b06035c2e31156",
"assets/assets/home_tiles/ca/Digital%2520Storage_Dark.png": "491b61b282e9931bc1ba6721cfc8fb06",
"assets/assets/home_tiles/ca/Energy.png": "84c20c5f07c7511b1a46b45bdef43be9",
"assets/assets/home_tiles/ca/Energy_Dark.png": "928ed24f6a73e97f5e77ff0abf6af021",
"assets/assets/home_tiles/ca/Force.png": "3f793c50073443722e9024206b8dd415",
"assets/assets/home_tiles/ca/Force_Dark.png": "b3eb68a4ae6731c8a1984a592f8f9fcc",
"assets/assets/home_tiles/ca/Frequency.png": "3cb328c0470f243976142791788e41fa",
"assets/assets/home_tiles/ca/Frequency_Dark.png": "23fba69d2700b0ac30cbd630fc3a33e2",
"assets/assets/home_tiles/ca/Fuel%2520Economy.png": "787301ee39eca41ed2acb0d2e9fa26d5",
"assets/assets/home_tiles/ca/Fuel%2520Economy_Dark.png": "554026ec46eab746c0b2b1513e8cba3d",
"assets/assets/home_tiles/ca/Length.png": "53892f48cec144cd6f12e1e7df2e0c87",
"assets/assets/home_tiles/ca/Length_Dark.png": "e6996852e9c74e4712982b57d782f58b",
"assets/assets/home_tiles/ca/Mass.png": "092de6d0ed861cb3b79d010bda16c0b7",
"assets/assets/home_tiles/ca/Mass_Dark.png": "4de00d97d55e52867e6360598fc988fa",
"assets/assets/home_tiles/ca/Pressure.png": "2c0fd0181a152a581558814f9ec18adb",
"assets/assets/home_tiles/ca/Pressure_Dark.png": "a38103b398384b230b0a2feb40623ab6",
"assets/assets/home_tiles/ca/Speed.png": "99df1992ff70fbc3c8b320b5d0e906ed",
"assets/assets/home_tiles/ca/Speed_Dark.png": "817194ecbe72ddde9c9ac903709a092f",
"assets/assets/home_tiles/ca/Temperature.png": "5d437186bd1ed2e9ddae35321fd13d0b",
"assets/assets/home_tiles/ca/Temperature_Dark.png": "4fd9ab277cc7888fa531176491b40746",
"assets/assets/home_tiles/ca/Time.png": "fc7bc5456937911f76f7acfaa91679d4",
"assets/assets/home_tiles/ca/Time_Dark.png": "7f690542e784b46d1f99b22d4481695c",
"assets/assets/home_tiles/ca/Volume.png": "0df3d29de9918edfb19ac6b8b36f1139",
"assets/assets/home_tiles/ca/Volume_Dark.png": "95291e809bf6637e2e8d8ff229a3d49b",
"assets/assets/home_tiles/de/Angle.png": "097e5b733ae8a10f6b77752e218fce24",
"assets/assets/home_tiles/de/Angle_Dark.png": "996e636138e34e1198937774960a70f1",
"assets/assets/home_tiles/de/Area.png": "2ccae51efbb2168829da87a54f5187cf",
"assets/assets/home_tiles/de/Area_Dark.png": "45e0790989e6d3d6b4506f2331366922",
"assets/assets/home_tiles/de/Data%2520Transfer%2520Rate.png": "6463e92f79af583221aff76ddabc7064",
"assets/assets/home_tiles/de/Data%2520Transfer%2520Rate_Dark.png": "8f299ccb98775e24398fe995a040ecbc",
"assets/assets/home_tiles/de/Digital%2520Storage.png": "c0e1f86cb1c541905e3215a27501fc62",
"assets/assets/home_tiles/de/Digital%2520Storage_Dark.png": "6e22bb7e8132898e5a822e719dba5abb",
"assets/assets/home_tiles/de/Energy.png": "6673b20559ac7203e71c0927d9c025af",
"assets/assets/home_tiles/de/Energy_Dark.png": "ce1f7cf839b7f2a41dad5668d0438f6f",
"assets/assets/home_tiles/de/Force.png": "878541ed64a43c121feace007196391b",
"assets/assets/home_tiles/de/Force_Dark.png": "508031f4c273891e8360a83d992842fb",
"assets/assets/home_tiles/de/Frequency.png": "53a250540cd011ec00edd2ce46ec4e20",
"assets/assets/home_tiles/de/Frequency_Dark.png": "2dce6880465fac767e00dac8b17e06ad",
"assets/assets/home_tiles/de/Fuel%2520Economy.png": "b51c0beb8b6185bdf9b2d216596b086c",
"assets/assets/home_tiles/de/Fuel%2520Economy_Dark.png": "a26c31f3b743e658a35c6d1b33b22e24",
"assets/assets/home_tiles/de/Length.png": "fe364adf573bef9b1cb30af7437aca45",
"assets/assets/home_tiles/de/Length_Dark.png": "f4c6ad63829136d4d55c5ada7bb07324",
"assets/assets/home_tiles/de/Mass.png": "ee0160500e66a39511d076f8e4f6fb96",
"assets/assets/home_tiles/de/Mass_Dark.png": "f584a6c493bf5c85ccc61c29eff05296",
"assets/assets/home_tiles/de/Pressure.png": "46e03331edcce9efc4444bf09a74c32a",
"assets/assets/home_tiles/de/Pressure_Dark.png": "07a28d8d44e334f42cef7e60ed495b57",
"assets/assets/home_tiles/de/Speed.png": "81c9e74517b1712a718a4a69405b7a1c",
"assets/assets/home_tiles/de/Speed_Dark.png": "289ac0f6b94deb2302be5f550f5af879",
"assets/assets/home_tiles/de/Temperature.png": "e43db239f2b3b10a65230d446ddbc82c",
"assets/assets/home_tiles/de/Temperature_Dark.png": "4857e9d63aac9d4174b93e4609ae2044",
"assets/assets/home_tiles/de/Time.png": "cd45cf88287a873fdfdc6e2c5a9f233a",
"assets/assets/home_tiles/de/Time_Dark.png": "1f06d8723a544ef4feacb6a7dc1f0c90",
"assets/assets/home_tiles/de/Volume.png": "d9dc2ca08a7c71c7836e6c71d759cc65",
"assets/assets/home_tiles/de/Volume_Dark.png": "1fabe73215c7af6bb5fd997572c14225",
"assets/assets/home_tiles/en/Angle.png": "c799b201aee38ca101d62d859c9a0c62",
"assets/assets/home_tiles/en/Angle_Dark.png": "e5cbe6840915d2b162ae58f00dfe8c4d",
"assets/assets/home_tiles/en/Area.png": "94b7669bbc8e702c1e7581d199335c4d",
"assets/assets/home_tiles/en/Area_Dark.png": "8269e5f3bf290b49826b4c54e4fe5a5f",
"assets/assets/home_tiles/en/Data%2520Transfer%2520Rate.png": "c9287241be1f02bf5fe3cc3653e699d3",
"assets/assets/home_tiles/en/Data%2520Transfer%2520Rate_Dark.png": "f852cd25c2fff950dd811e6a672c8dd5",
"assets/assets/home_tiles/en/Digital%2520Storage.png": "647c1c5b71baf5890d93177b71eb34f3",
"assets/assets/home_tiles/en/Digital%2520Storage_Dark.png": "b2428a3f953e9c04b3e409e59a396e2c",
"assets/assets/home_tiles/en/Energy.png": "00ab19e4f192d3f4b59be5c372b2a73b",
"assets/assets/home_tiles/en/Energy_Dark.png": "ada44368bb77f52c4f7fb272587db422",
"assets/assets/home_tiles/en/Force.png": "e94881311bd853e813a96f7d57b85759",
"assets/assets/home_tiles/en/Force_Dark.png": "5f02a608268b29ffd59e141a8dcfed35",
"assets/assets/home_tiles/en/Frequency.png": "762e6de15b112257ca2e436825b4d8d0",
"assets/assets/home_tiles/en/Frequency_Dark.png": "56dd09966b7b9f217dbaebcc21493e2d",
"assets/assets/home_tiles/en/Fuel%2520Economy.png": "84b0db0d2381985f7c43353a2c3b3a3e",
"assets/assets/home_tiles/en/Fuel%2520Economy_Dark.png": "e831371d945401a1ac05f55815793c4c",
"assets/assets/home_tiles/en/Length.png": "07860789b86e5c121a0c39b201cba926",
"assets/assets/home_tiles/en/Length_Dark.png": "62339728d751b491a9463060f133d12f",
"assets/assets/home_tiles/en/Mass.png": "854c2a659374b3be50c33c7d09b28817",
"assets/assets/home_tiles/en/Mass_Dark.png": "5c67c63828c4f72b04b2f2805382d64e",
"assets/assets/home_tiles/en/Pressure.png": "d5878cfa156d1a0884148bac218acabb",
"assets/assets/home_tiles/en/Pressure_Dark.png": "2870bdd5d960aeb231664f692f0e784f",
"assets/assets/home_tiles/en/Speed.png": "e454f5f4905b1f0fc15a33f662a6e91a",
"assets/assets/home_tiles/en/Speed_Dark.png": "9b8cf0339c838139f66c27a5793abaa1",
"assets/assets/home_tiles/en/Temperature.png": "6963f6066ab2b662cc33c309cfc615cd",
"assets/assets/home_tiles/en/Temperature_Dark.png": "ee1ca885a4bf9315ae8f40769ad1aecb",
"assets/assets/home_tiles/en/Time.png": "8201ad72181eadbbb1b5bedb897e5b10",
"assets/assets/home_tiles/en/Time_Dark.png": "0c59231e55ab4a91497dc7d055e6b91d",
"assets/assets/home_tiles/en/Volume.png": "eaa63c8bd44b93d2e90a93a9abd96a99",
"assets/assets/home_tiles/en/Volume_Dark.png": "19a4d051a105bea29ea265d31b29ad18",
"assets/assets/home_tiles/es/Angle.png": "3337efbc464f054ed128dc61feebf52c",
"assets/assets/home_tiles/es/Angle_Dark.png": "f6d52e5ecb026bb64dfbb43bf412b508",
"assets/assets/home_tiles/es/Area.png": "f2e58aaf0478607baa2f930411bff866",
"assets/assets/home_tiles/es/Area_Dark.png": "1ccf97c77ea9b5279e1976817ba024e5",
"assets/assets/home_tiles/es/Data%2520Transfer%2520Rate.png": "c1a44472095bd334a92b46699c2a7d08",
"assets/assets/home_tiles/es/Data%2520Transfer%2520Rate_Dark.png": "10b24636a15f3e718306d3a8d75e76e4",
"assets/assets/home_tiles/es/Digital%2520Storage.png": "1708522bb734d1e399c57e1534a4c5ce",
"assets/assets/home_tiles/es/Digital%2520Storage_Dark.png": "06f9cc64ca20c07cd76e8a30e1b86c9e",
"assets/assets/home_tiles/es/Energy.png": "33ca28f855c17b5dabffcc362588cc3a",
"assets/assets/home_tiles/es/Energy_Dark.png": "9f9560ac486b0033d7156fc85819e3aa",
"assets/assets/home_tiles/es/Force.png": "390296c3ae3e591e172dbfcb83ccea56",
"assets/assets/home_tiles/es/Force_Dark.png": "2d866a06c3fdbcace1955fb83fd2cbca",
"assets/assets/home_tiles/es/Frequency.png": "08e87d09570804581283c1c5d3942313",
"assets/assets/home_tiles/es/Frequency_Dark.png": "5185a1766cc9350003b145e052261954",
"assets/assets/home_tiles/es/Fuel%2520Economy.png": "46b2f5d6d47e2f3e3530792e1bbdd7f9",
"assets/assets/home_tiles/es/Fuel%2520Economy_Dark.png": "db67cef7b89c818adcc1500f7004a34a",
"assets/assets/home_tiles/es/Length.png": "3e6a9d40bc8d90f9b4ba483c513be053",
"assets/assets/home_tiles/es/Length_Dark.png": "8aee4351268117d8c3ee63174b01620c",
"assets/assets/home_tiles/es/Mass.png": "d5e40c0441e83df01880b04b73927766",
"assets/assets/home_tiles/es/Mass_Dark.png": "1b5db09aead52b251fcc90959cc5ce8e",
"assets/assets/home_tiles/es/Pressure.png": "a1735eb151a7a49fa9b7995551b7e786",
"assets/assets/home_tiles/es/Pressure_Dark.png": "edb4c3d8d6b585ca36c4c378c7fff94e",
"assets/assets/home_tiles/es/Speed.png": "a0be4ed450915aaf076ff59d2046d656",
"assets/assets/home_tiles/es/Speed_Dark.png": "946483250634742fb347f160a502221c",
"assets/assets/home_tiles/es/Temperature.png": "8b8bb89b73a9917ac7e20f025d1827da",
"assets/assets/home_tiles/es/Temperature_Dark.png": "2d361bf35ebe3af32d94f57517f9ba5b",
"assets/assets/home_tiles/es/Time.png": "2adbd81550af8903fceba974d0cd6df6",
"assets/assets/home_tiles/es/Time_Dark.png": "16041d4842ce7331cbc59a59282af321",
"assets/assets/home_tiles/es/Volume.png": "584e0b8f78d78f6d824fa4e250fdbe59",
"assets/assets/home_tiles/es/Volume_Dark.png": "a90fbb094d572d0888b1a25b8531e407",
"assets/assets/home_tiles/fr/Angle.png": "ce2a87c5d9e6c8f9156c06d77345f742",
"assets/assets/home_tiles/fr/Angle_Dark.png": "40e05f23e3a52409151bbbe3c1362c93",
"assets/assets/home_tiles/fr/Area.png": "81dad70ca73df187ad10e32e9bc9fb12",
"assets/assets/home_tiles/fr/Area_Dark.png": "7bcf4d1f596c8fad52a672bec7218f95",
"assets/assets/home_tiles/fr/Data%2520Transfer%2520Rate.png": "87c655cbc2701cb5a4c2706bd4a55455",
"assets/assets/home_tiles/fr/Data%2520Transfer%2520Rate_Dark.png": "1c6b3a07e70c7335092214733904e2cd",
"assets/assets/home_tiles/fr/Digital%2520Storage.png": "d6b27d2be88acc389dee0282b9f5dccc",
"assets/assets/home_tiles/fr/Digital%2520Storage_Dark.png": "6d56a90078c5578883863b82389e1b01",
"assets/assets/home_tiles/fr/Energy.png": "b8c02261ba1194a5446ae00620487e9f",
"assets/assets/home_tiles/fr/Energy_Dark.png": "7cef278164deb8d2d4f6f0a4e53019d7",
"assets/assets/home_tiles/fr/Force.png": "310c231907f628e599111786d9062192",
"assets/assets/home_tiles/fr/Force_Dark.png": "956e882c34333a901134336f6b79e2b5",
"assets/assets/home_tiles/fr/Frequency.png": "b7d64d32206d1d06500fff292fdd223e",
"assets/assets/home_tiles/fr/Frequency_Dark.png": "750108b3180366b6a122e3bff7281a6b",
"assets/assets/home_tiles/fr/Fuel%2520Economy.png": "93ba07a749d2bdf96b25805782676b41",
"assets/assets/home_tiles/fr/Fuel%2520Economy_Dark.png": "53a4845edb5f49b3f3dd79de9c1b1503",
"assets/assets/home_tiles/fr/Length.png": "9321e1c049ec421a02715f164e0f9641",
"assets/assets/home_tiles/fr/Length_Dark.png": "dd899bf66c7672f893c2d5b8af147a32",
"assets/assets/home_tiles/fr/Mass.png": "e88adc1a3efb58af2f36264ba6ada355",
"assets/assets/home_tiles/fr/Mass_Dark.png": "86a5728d568db187d34e543fe56e0ffd",
"assets/assets/home_tiles/fr/Pressure.png": "232866722d2390b35958c14e4c7afc15",
"assets/assets/home_tiles/fr/Pressure_Dark.png": "c309f519fe0955c9b1eed8718f384f03",
"assets/assets/home_tiles/fr/Speed.png": "b91d66c0b21188268f4c4267340616ae",
"assets/assets/home_tiles/fr/Speed_Dark.png": "86f0899979d0f282d5733387382187cd",
"assets/assets/home_tiles/fr/Temperature.png": "d74124fd5bda1a790b1213aeaec41194",
"assets/assets/home_tiles/fr/Temperature_Dark.png": "610bf433b6b72b243b1eb912a7f638c3",
"assets/assets/home_tiles/fr/Time.png": "4b6807d50e6ec0d55d3b186cf94b3928",
"assets/assets/home_tiles/fr/Time_Dark.png": "f75653e8817f072332919e6a9b1528f7",
"assets/assets/home_tiles/fr/Volume.png": "1c42e4aad0eff459e5b24a7321b33846",
"assets/assets/home_tiles/fr/Volume_Dark.png": "64a5bd6f76183a83c87c7b0fcf057aab",
"assets/assets/home_tiles/nl/Angle.png": "a681758af7665d0247916558f5ea5707",
"assets/assets/home_tiles/nl/Angle_Dark.png": "df160e84f1ecfd02499da12f42b60e52",
"assets/assets/home_tiles/nl/Area.png": "96120017f53c7f91163217b7d193cd34",
"assets/assets/home_tiles/nl/Area_Dark.png": "1d8ab5e1f58fe894c055f8279f0fee6b",
"assets/assets/home_tiles/nl/Data%2520Transfer%2520Rate.png": "2223bd138cf5b97729805fee2241fd35",
"assets/assets/home_tiles/nl/Data%2520Transfer%2520Rate_Dark.png": "c58216372a3aa109fbfa57680c2aad14",
"assets/assets/home_tiles/nl/Digital%2520Storage.png": "b337f2049a4f94edb3178b5374cd4e61",
"assets/assets/home_tiles/nl/Digital%2520Storage_Dark.png": "ea4406de2653bd8b2f5a3f8a6153400d",
"assets/assets/home_tiles/nl/Energy.png": "0ce055ecc806d8c2056b946e87a942fc",
"assets/assets/home_tiles/nl/Energy_Dark.png": "6a1a408896388d60993936f1da01e62d",
"assets/assets/home_tiles/nl/Force.png": "de58e64124f4c639158a90ba90425128",
"assets/assets/home_tiles/nl/Force_Dark.png": "0140cc9bc544e4fd85e587f872afbc69",
"assets/assets/home_tiles/nl/Frequency.png": "0f224c86d8cf583a34b7f0bd58f996eb",
"assets/assets/home_tiles/nl/Frequency_Dark.png": "316a6fbb44a5a6cb36c571515890b908",
"assets/assets/home_tiles/nl/Fuel%2520Economy.png": "fef0da49a62b2516e440114714f02030",
"assets/assets/home_tiles/nl/Fuel%2520Economy_Dark.png": "33d035e152256a49656772bb5bdeeac2",
"assets/assets/home_tiles/nl/Length.png": "f23ae1679632a26198d441ac0b554483",
"assets/assets/home_tiles/nl/Length_Dark.png": "fba1fe6b8e6f427fa4d427ba2cf4ec0e",
"assets/assets/home_tiles/nl/Mass.png": "d744fed0b8c81b40d11336671db930f9",
"assets/assets/home_tiles/nl/Mass_Dark.png": "4f72e1c344cba0844bb67b77ab5c612a",
"assets/assets/home_tiles/nl/Pressure.png": "cfa899319d74dee7bc22ec698df14cfa",
"assets/assets/home_tiles/nl/Pressure_Dark.png": "a8958c9877c7a728b14836d46e737cd0",
"assets/assets/home_tiles/nl/Speed.png": "1515fbdbd9537305897c848a053ee412",
"assets/assets/home_tiles/nl/Speed_Dark.png": "87c27372dddeab1780068008f2bcdb5e",
"assets/assets/home_tiles/nl/Temperature.png": "7f12e7e87001124ac578664883dd13bd",
"assets/assets/home_tiles/nl/Temperature_Dark.png": "42b65251f71358e73a69abfcd01681b1",
"assets/assets/home_tiles/nl/Time.png": "7eabc54fa00ee7400b8d5a1b6a03b30f",
"assets/assets/home_tiles/nl/Time_Dark.png": "83d61fdc9889755b873ba37a9cc51a50",
"assets/assets/home_tiles/nl/Volume.png": "016ef91af988d4ca484645598ff67f78",
"assets/assets/home_tiles/nl/Volume_Dark.png": "f041e1fe7b8462d02527c3140c49ded5",
"assets/assets/home_tiles/uk/Angle.png": "66ac0291452462db752b60b042436a2a",
"assets/assets/home_tiles/uk/Angle_Dark.png": "73a7e0db6c5c0c31ff560f593b6acd3d",
"assets/assets/home_tiles/uk/Area.png": "e83d9dabe9ffb080beee2c21bff63dc1",
"assets/assets/home_tiles/uk/Area_Dark.png": "6a056a49c74a414407ed5330f5e97b50",
"assets/assets/home_tiles/uk/Data%2520Transfer%2520Rate.png": "dd13ebac1f62a87fa991db7b10505181",
"assets/assets/home_tiles/uk/Data%2520Transfer%2520Rate_Dark.png": "e3ab7d53c47f1f5dfb818e41d4c1e007",
"assets/assets/home_tiles/uk/Digital%2520Storage.png": "eb1af6b0ba5144ff1c925019e1338241",
"assets/assets/home_tiles/uk/Digital%2520Storage_Dark.png": "668d1d307dba4991064df54a5b13552b",
"assets/assets/home_tiles/uk/Energy.png": "6417d55fefe9aac7a460f45fdbaeaf8b",
"assets/assets/home_tiles/uk/Energy_Dark.png": "9596e113f40ec570f6e06dcd4e8ced60",
"assets/assets/home_tiles/uk/Force.png": "bce8d94b7cce93d7c5e5450ed18368c9",
"assets/assets/home_tiles/uk/Force_Dark.png": "7d9c4568fe09c61cefbeec0789d6ea9a",
"assets/assets/home_tiles/uk/Frequency.png": "1c9a2d72a9a113e2739e7dfafe5f48b2",
"assets/assets/home_tiles/uk/Frequency_Dark.png": "6f99be69283d070fd91de2d357553d69",
"assets/assets/home_tiles/uk/Fuel%2520Economy.png": "9c3d816afa545b25daf32b99382afef9",
"assets/assets/home_tiles/uk/Fuel%2520Economy_Dark.png": "cbea782565d551e31717bbd09ff6af97",
"assets/assets/home_tiles/uk/Length.png": "9ee203a2937d9dcd97666b229158d9b1",
"assets/assets/home_tiles/uk/Length_Dark.png": "e8298a59be2db75f118e371419918d4e",
"assets/assets/home_tiles/uk/Mass.png": "5e5efc89aa27e61ba064b9e3a0f215e5",
"assets/assets/home_tiles/uk/Mass_Dark.png": "1e4746192052e8926fc57a1b99228d65",
"assets/assets/home_tiles/uk/Pressure.png": "160084e49ec76997da57385a75156d2a",
"assets/assets/home_tiles/uk/Pressure_Dark.png": "a200dd5eab1a9fa39ab731611c18ec06",
"assets/assets/home_tiles/uk/Speed.png": "8dfdab23829b6a0b8f2e5a091e4e2859",
"assets/assets/home_tiles/uk/Speed_Dark.png": "628be33c41aeaa3b83d57f2548aed515",
"assets/assets/home_tiles/uk/Temperature.png": "83a4f9c40507c2f3479784c1316473d2",
"assets/assets/home_tiles/uk/Temperature_Dark.png": "ecaa78acdfb54ede9333ae94a34a9c5e",
"assets/assets/home_tiles/uk/Time.png": "f761d07d7be7a33a0e9a163963af1bbd",
"assets/assets/home_tiles/uk/Time_Dark.png": "bd7fbb84d1ea027c542f7729488764b9",
"assets/assets/home_tiles/uk/Volume.png": "d5c04944ca4657b9e90f0c1136cf8111",
"assets/assets/home_tiles/uk/Volume_Dark.png": "312fa8344d28c7c04e24964754ec3b9d",
"assets/assets/logo/Animated-Logo.gif": "519354f9e92aea5306670de63e607017",
"assets/assets/logo/Icon.ico": "133b4f480cdbf8c20470322e990d87af",
"assets/assets/logo/Icon.png": "d64bca305e2cc0f2f34bc4f982af9544",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fff6c46161dd7f7611c030306c2a622b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1ebecb83f09b2e313c6a187525c1ba4",
"/": "e1ebecb83f09b2e313c6a187525c1ba4",
"main.dart.js": "4e0621800395b87994fab4534045c2ae",
"manifest.json": "b1cf10c076a2492acbe5a463bf9a8b4f",
"splash/img/dark-1x.png": "1d119b2f323cff0c20aeddcbd794458e",
"splash/img/dark-2x.png": "032b3b8b871f5c2e74c1f98fa8606a65",
"splash/img/dark-3x.png": "37ade81f15abe808925fd78632bd5054",
"splash/img/dark-4x.png": "c895ad016820ca19aa015b6554cf57ca",
"splash/img/light-1x.png": "1d119b2f323cff0c20aeddcbd794458e",
"splash/img/light-2x.png": "032b3b8b871f5c2e74c1f98fa8606a65",
"splash/img/light-3x.png": "37ade81f15abe808925fd78632bd5054",
"splash/img/light-4x.png": "c895ad016820ca19aa015b6554cf57ca",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "86c7608ad714e32ce1ebfe277ca6ecff",
"version.json": "a2a890bcb3932a599874a41cac5af498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

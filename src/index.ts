import { derivePublicKey } from "@zk-kit/eddsa-poseidon";

const privateKey = "some-private-key";

const publicKey = derivePublicKey(privateKey);

import { derivePublicKey } from "@zk-kit/eddsa-poseidon";
import { mulPointEscalar } from "@zk-kit/baby-jujub"
import { IMT } from "@zk-kit/imt"
import { LazyTowerHashChainProofBuilder } from "@zk-kit/lazytower"
import { LeanIMT } from "@zk-kit/lean-imt"
import { tokenize } from "@zk-kit/logical-expressions"
import { poseidonEncrypt } from "@zk-kit/poseidon-cipher"
import { generate } from "@zk-kit/poseidon-proof"
import { SMT } from "@zk-kit/smt"
import { packing } from "@zk-kit/utils"

const privateKey = "some-private-key";

const publicKey = derivePublicKey(privateKey);

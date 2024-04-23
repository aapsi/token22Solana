-> npm i @metaplex-foundation/mpl-token-metadata @solana/web3.js @metaplex-foundation/umi @metaplex-foundation/umi-bundle-defaults @metaplex-foundation/umi-web3js-adapters bs58

or

simply do : npm i
-> run ts-node wallet.ts

<!-- save the json file generated from above command, we will use the same keypair/wallet in all projects -->

-> run
solana config set -ud -k guideSecret.json

->run to create token address, you can use anything ADT:1, xYZ:1, etc

token22Solana % solana-keygen grind --starts-with Tok:1

<!-- use the json file generated from above command instead of TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah.json-->

-> spl-token create-token -p TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah.json

<!-- example :
Creating token TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah under program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb

Address:  TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah
Decimals:  9

Signature: 4CGhmhMTkZM3v76igNa5QG3tpyKQuk36fmyy5DLmMRVHXPfaeg5oP3voiS2MsZMWEVBKvWNkWobbWR3qad1PAAGL

 -->

<!-- the above will create mint address , copy the mint address from terminal -->

-> update metadata, run following command
ts-node mpl_token22

-> create a token account for yourself against the wallet you own, run:
spl-token create-account TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah

<!--
Creating account 7UGuiiGMQdKHZefwdkhVLcMnyjuAZN5Az28SuE6h2dPf

Signature: FVtjFJH2EkefGRwenCn85btcu1zSGjL8mncBcrDEBZV6bw2aCDDPEgreCvdZaVj38rQ3f3LWyDmmVtbv2PCkBy8
 -->

-> mint tokens, run:
spl-token mint TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah 1000

<!--
Minting 1000 tokens
  Token: TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah
  Recipient: 7UGuiiGMQdKHZefwdkhVLcMnyjuAZN5Az28SuE6h2dPf

Signature: 4NzmG2xiGXyfYWukSLkE1sbmqL35TzLwfov69zN6Qsvzoy9c5UMGRzKcZQujDdvaeKtNXVgg8nkx5iDWJ9z9NotK
 -->

-> disable mint and freeze
$ spl-token authorize <MINT_ADDRESS> mint --disable
$ spl-token authorize <MINT_ADDRESS> freeze --disable

<!-- run command:
spl-token authorize TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah mint --disable --url devnet
 -->

 <!-- output
 Updating TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah
  Current mint authority: DZKXnBV8Xv1XSDyt6eAcMQnNN2NtPGrqPXdJ9oGMPaVp
  New mint authority: disabled

Signature: 4epW6Xx8ga2gYSBSN6f8f8L2mn1HJB5Ad3ivjNJ3ZahLuvuCxHFy7gegtetB43hr77BUfWcWrxecsSF7SCtVzi34
 
  -->

 <!-- 
 run command: spl-token authorize TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah freeze --disable --url devnet

 output:
 Updating TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah
  Current freeze authority: disabled
  New freeze authority: disabled
  -->

-> transfer tokens to vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg, (clients address)
$ spl-token transfer --fund-recipient TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah 5000 vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg

<!--  output:
Transfer 5000 tokens
  Sender: 7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi
  Recipient: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg
  Recipient associated token account: F59618aQB8r6asXeMcB9jWuY6NEx1VduT9yFo1GTi1ks
  Funding recipient: F59618aQB8r6asXeMcB9jWuY6NEx1VduT9yFo1GTi1ks (0.00203928 SOL)
%
Signature: 5a3qbvoJQnTAxGPHCugibZTbSu7xuTgkxvF4EJupRjRXGgZZrnWFmKzfEzcqKF2ogCaF4QKVbAtuFx7xGwrDUcGd

-->

## THE END

-> close your own token account
spl-token transfer --fund-recipient TokCAbDXqgVGs9Ldgd1fGUW1cs9YZaJ12SQZUnC4qah

---

aapsikhaira@Aapsis-MacBook-Air token22Solana % spl-token authorize --help
spl-token-authorize
Authorize a new signing keypair to a token or token account

USAGE:
spl-token authorize [FLAGS] [OPTIONS] <TOKEN_ADDRESS> <AUTHORITY_TYPE> <AUTHORITY_ADDRESS>

https://rya-sge.github.io/access-denied/2022/08/06/solana-spl-token/#disable-authorization

->>>>>
updating DRTzWYidwMKTS2kFJFmjrTVxgL7DxYgbeLTzy61TrW5q
Current mint authority: DZKXnBV8Xv1XSDyt6eAcMQnNN2NtPGrqPXdJ9oGMPaVp
New mint authority: disabled

Signature: 4D8omNauftdHTcokxNHxmNcctgwEwce36bDLrgWmS9FMUBSNfq5uFTi8Y4y6Hkv8JBWYqjy4wRbkNy1UVRzzKLwc

->>>>
apsikhaira@Aapsis-MacBook-Air token22Solana % spl-token authorize DRTzWYidwMKTS2kFJFmjrTVxgL7DxYgbeLTzy61TrW5q freeze --disable --url devnet
Updating DRTzWYidwMKTS2kFJFmjrTVxgL7DxYgbeLTzy61TrW5q
Current freeze authority: disabled
New freeze authority: disabled

$ spl-token authorize <MINT_ADDRESS> mint --disable
$ spl-token authorize <MINT_ADDRESS> freeze --disable

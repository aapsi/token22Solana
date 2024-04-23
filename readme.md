-> spl-token create-token -p TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb xyz.json

-> update metadata

-> create a token account for yourself

-> mint tokens

-> disable mint and freeze

-> transfer tokens

-> close your own token account

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

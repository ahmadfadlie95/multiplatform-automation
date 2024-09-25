This configuration supports multiplatform testing and is applicable for end-to-end testing. A relevant example is the Cashier system, which typically consists of two components: the Web-based Back-office System (BOS) and the Mobile-based Point-of-Sale (POS) system. While these systems run separately, they are integrated with each other. For instance, after completing a transaction on the POS, verify that the transaction is properly recorded in the BOS.

To run this configuration locally, simply clone the repository and run the following command:

``` npm install ```

After done with the installation. To execute the script, run the following command at Terminal:

``` npx wdio ```

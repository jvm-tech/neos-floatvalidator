import manifest from "@neos-project/neos-ui-extensibility";
import { FloatValidator } from "./FloatValidator";

manifest("JvMTECH.Neos.FloatValidator", {}, (globalRegistry) => {
  const validatorRegistry = globalRegistry.get("validators");
  validatorRegistry.set("JvMTECH.Neos.FloatValidator/Validation/FloatValidator", FloatValidator);
});

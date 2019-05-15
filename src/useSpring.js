import { useSprings } from './useSprings'
import { callProp } from './shared/helpers'

/** API
 * const [props, set, cancel] = useSpring(props, [optionalDeps])
 * const [props, set, cancel] = useSpring(() => props, [optionalDeps])
 */

export const useSpring = (props, deps) => {
  const [result, set, stop] = useSprings(1, [callProp(props)], deps)
  return [result[0], set, stop]
}

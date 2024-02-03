import { FetchStateType } from "../types/app/store"


export type EvaluateFetchStateSimpleProps = {
  state: FetchStateType
  onSuccess?(): void
  onError?(): void
  onComplete?(): void
}

export const evaluateFetchStateSimple = (params: EvaluateFetchStateSimpleProps) => {
  if (params.state !== 'initialize' && params.state !== 'loading') {
    switch(params.state) {
      case 'success': params.onSuccess && params.onSuccess(); break
      case 'error': params.onError && params.onError();
    }
    params.onComplete && params.onComplete()
  }
}